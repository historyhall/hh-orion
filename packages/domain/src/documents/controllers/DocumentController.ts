import {EntityManager} from "@mikro-orm/core";
import {Schema} from "hh-orion-schema/dist";
import {Document} from "../entities";

export class DocumentController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Document);
    }

    async getById(data: Schema.documents.document.getById.params) {
        const document = await this.em.findOne({id: data.id}, {populate: ['authors']});
        if (!document) throw new Error('A document with that id could not found.');
        return document;
    }

    async getTotal() {
        return this.em.count({})
    }
}
