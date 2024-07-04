import {EntityManager} from "@mikro-orm/core";
import {Migration} from "../entities";

export class MigrationController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Migration);
    }

    getAll() {
        return this.em.find({}, {orderBy: {date: 'desc'}});
    }
}