import {Client} from "@elastic/elasticsearch";
import {EntityManager} from "@mikro-orm/core";
import debug from 'debug';
import * as Schema from "hh-orion-schema";
import {AuthorController} from "../../accounts";
import {Document} from "../../documents";
import {stripHtmlFromString} from "../../lib/stripHtmlFromString";
import {UserData} from "../../types";

const d = debug('hh.domain.system.controllers.SearchController');

type QueryType = {
    id: string;
    version: number;
    createdAt: string;
    name: string;
    authors: String;
}

export class SearchController {
    public em;
    public documentRepo;
    public search;
    public userData;

    public constructor(em: EntityManager, userData: UserData, search: Client) {
        this.em = em;
        this.documentRepo = em.getRepository(Document);
        this.search = search
        this.userData = userData;
    }
    
    async query(data: Schema.system.search.query.params) {
        return this.search.search<QueryType>(
            {
                index: 'hh-index',
                size: 20,
                body: {
                    query: {
                        bool: {
                            should: [
                                {match: {
                                        content: {
                                            query: data.query,
                                            operator: "or",
                                            fuzziness: 1,
                                        },
                                    }},
                                {match: {
                                        name: {
                                            query: data.query,
                                            operator: "or",
                                            fuzziness: 1,
                                        },
                                    }}
                            ]
                        },
                    },
                    highlight : {
                        order: "score",
                        pre_tags : ["<span style=\"background-color: #fbbd08\">"],
                        post_tags : ["</span>"],
                        fields : {
                            title : {
                                type: 'plain',
                                fragment_size : data.query.length + 10
                            },
                            content : {
                                type: 'unified',
                                boundary_scanner: 'sentence',
                                fragment_size : 0,
                            }
                        }
                    }
                }
            }
        );
    }

    async indexDocuments() {
        if (await this.search.indices.exists({index: 'hh-index'})) {
            d('Delete existing index');
            await this.search.indices.delete({index: 'hh-index'});
        }
        d('Create new index');
        await this.search.indices.create({ index: 'hh-index' })

        const authorController = new AuthorController(this.em, this.userData);

        const documents = await this.documentRepo.find( {});
        documents.map(async document => {
            d('index', document.id);

            await this.search.index({
                index: 'hh-index',
                id: document.id,
                document: {
                    id: document.id,
                    name: document.name,
                    content: stripHtmlFromString(document.content),
                    createdAt: document.createdAt.toString(),
                    authors: await authorController.generateAuthorsList(document.authors),
                },
            });
        })

        return true;
    }
}
