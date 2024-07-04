import {EntityManager} from "@mikro-orm/core";
import {Document} from "../entities";

export class DocumentController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Document);
    }

    async getById(id: string) {
        const document = await this.em.findOne({id}, {populate: ['authors']});
        if (!document) throw new Error('document not found');

        return document;
    }

    getAll() {
        return this.em.find({});
    }

    getNameLike(term: string) {
        return this.em.find({name: {$ilike: `%${term}%`}});
    }

    getTotal() {
        return this.em.count({})
    }
}