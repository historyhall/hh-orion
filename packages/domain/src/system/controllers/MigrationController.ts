import {EntityManager} from "@mikro-orm/core";
import {Migration} from "../entities";
import {UserData} from "../../types";

export class MigrationController {
    public migrationRepo;
    public userData;

    public constructor(em: EntityManager, userData: UserData) {
        this.migrationRepo = em.getRepository(Migration);
        this.userData = userData;
    }

    async getAll() {
        return this.migrationRepo.find({}, {orderBy: {name: 'desc'}});
    }
}