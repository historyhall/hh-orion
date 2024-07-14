import {EntityManager} from "@mikro-orm/core";
import {Document} from "../entities";
import * as Schema from "hh-orion-schema/dist";

export class DocumentController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Document);
    }

    async getById(data: Schema.documents.document.getById.params) {
        const document = await this.em.findOne({id: data.id}, {populate: ['authors']});
        if (!document) throw new Error('document not found');
        return document;
    }

    async getTotal() {
        return this.em.count({})
    }
}
