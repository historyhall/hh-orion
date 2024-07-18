import {EntityManager} from "@mikro-orm/core";
import {Migration} from "../entities";

export class MigrationController {
    public migrationRepo;

    public constructor(em: EntityManager) {
        this.migrationRepo = em.getRepository(Migration);
    }

    async getAll() {
        return this.migrationRepo.find({}, {orderBy: {name: 'desc'}});
    }
}