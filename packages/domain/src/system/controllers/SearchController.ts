import {EntityManager} from "@mikro-orm/core";
import {Migration} from "../entities";

export class SearchController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Migration);
    }

    query() {
    }
    
    indexDocuments() {
    }
}
