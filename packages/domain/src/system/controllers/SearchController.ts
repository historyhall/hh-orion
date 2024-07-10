import {EntityManager} from "@mikro-orm/core";
import debug from 'debug';
import {Client} from "elasticsearch";
import {Document} from "../../documents";

const d = debug('hh.domain.system.controllers.SearchController');

export class SearchController {
    public em
    public search

    public constructor(em: EntityManager, search: Client) {
        this.em = em;
        this.search = search
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
            await this.search.indices.delete({index: 'hh-index'});
        }
        
        const documents = await this.em.find(Document, {});
        documents.map(async document => {
            d('index', document.id);

            await this.search.create({
                index: 'hh-index',
                id: document.id,
                body: {
                    id: document.id,
                    name: document.name.toLowerCase(),
                    content: document.content.toLowerCase(),
                },
                type: 'index'
            });
        })

        return true;
    }
}
