import {EntityManager} from "@mikro-orm/core";
import * as Schema from "hh-orion-schema";
import {Document} from "../entities";

export class DocumentController {
    public documentRepo;

    public constructor(em: EntityManager) {
        this.documentRepo = em.getRepository(Document);
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
