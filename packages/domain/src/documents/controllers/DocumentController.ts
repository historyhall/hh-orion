import {EntityManager} from "@mikro-orm/core";
import * as Schema from "hh-orion-schema";
import {Document} from "../entities";
import {UserData} from "../../types";

export class DocumentController {
    public documentRepo;
    public userData;

    public constructor(em: EntityManager, userData: UserData) {
        this.documentRepo = em.getRepository(Document);
        this.userData = userData;
    }

    async getById(data: Schema.documents.document.getById.params) {
        const document = await this.documentRepo.findOne({id: data.id}, {populate: ['authors']});
        if (!document) throw new Error('A document with that id could not found.');
        return document;
    }

    async getTotal() {
        return this.documentRepo.count({})
    }
}
