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

    query(query: string) {
        return this.search.search(
            {
                index: 'hh-index',
                size: 20,
                body: {
                    match: {
                        content: query
                    }
                }
            });
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
                body: document,
                type: 'index'
            });
        })

        return true;
    }
}
