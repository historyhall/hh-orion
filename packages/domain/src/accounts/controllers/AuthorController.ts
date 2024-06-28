import {EntityManager} from "@mikro-orm/core";
import {Author} from "../entities";

export class AuthorController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Author);
    }

    getAll() {
        return this.em.find({});
    }

    getTotal() {
        return this.em.count({})
    }
}