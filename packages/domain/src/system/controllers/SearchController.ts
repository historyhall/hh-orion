import {EntityManager} from "@mikro-orm/core";
import debug from 'debug';
import {Client} from "elasticsearch";
import {AuthorController} from "../../accounts";
import {Document} from "../../documents";

const d = debug('hh.domain.system.controllers.SearchController');

export class SearchController {
    public em
    public search

    public constructor(em: EntityManager, search: Client) {
        this.em = em;
        this.search = search
    }

    private stripHTML(text: string) {
        return text.replace(/<[^>]*>/g, '');
    }

   async query(query: string) {
        const result = await this.search.search(
            {
                index: 'hh-index',
                size: 20,
                body: {
                    query: {
                        bool: {
                            should: [
                                {match: {
                                        content: {
                                            query: query,
                                            operator: "or",
                                            fuzziness: 1,
                                        },
                                    }},
                                {match: {
                                        name: {
                                            query,
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
                                fragment_size : query.length + 10
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

        return result;
    }
    
    async indexDocuments() {
        if (await this.search.indices.exists({index: 'hh-index'})) {
            d('Delete existing index');
            await this.search.indices.delete({index: 'hh-index'});
        }
        d('Create new index');
        await this.search.indices.create({ index: 'hh-index' })

        const authorController = new AuthorController(this.em);
        
        const documents = await this.em.find(Document, {});
        documents.map(async document => {
            d('index', document.id);

            // @ts-ignore
            await this.search.index({
                index: 'hh-index',
                id: document.id,
                body: {
                    id: document.id,
                    name: document.name,
                    content: this.stripHTML(document.content),
                    createdAt: document.createdAt.toString(),
                    authors: await authorController.generateAuthorsList(document.authors),
                },
            });
        })

        return true;
    }
}