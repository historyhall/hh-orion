import {EntityManager} from "@mikro-orm/core";
import {Document} from "../entities";

export class DocumentController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Document);
    }

    getAll() {
        return this.em.find({});
    }

    getTotal() {
        return this.em.count({})
    }
}