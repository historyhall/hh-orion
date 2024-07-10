import {Client} from "elasticsearch";
import {EntityManager} from "@mikro-orm/core";
import {Document} from "../../documents";
import debug from 'debug';

const d = debug('hh.search');

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
                                            fuzziness: 5,
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
            });

       console.log(result);

        return result;
    }
    
    async indexDocuments() {
        console.log('start index');
        const documents = await this.em.find(Document, {});
        console.log('docs', documents.length);
        documents.map(async document => {
            d('index', document.id);
            await this.search.index({
                id: document.id,
                index: 'hh-index',
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
