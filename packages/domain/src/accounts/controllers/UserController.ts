import {EntityManager} from "@mikro-orm/core";
import {User} from "../entities";

export class UserController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(User);
    }

    getAll() {
        return this.em.find({});
    }

    getTotal() {
        return this.em.count({});
    }
}