import {Collection, EntityManager} from "@mikro-orm/core";
import {Author} from "../entities";

export class AuthorController {
    public authorRepo;

    public constructor(em: EntityManager) {
        this.authorRepo = em.getRepository(Author);
    }

    async getTotal() {
        return this.authorRepo.count({})
    }

    async generateAuthorsList(authors: Collection<Author,  object>) {
        let authorList = '';
        (await authors.loadItems()).forEach(author => {
            let name = '';
            if(author.firstName) {
                name = author.firstName;
                if(author.lastName) name += ` ${author.lastName}`
                if(author.organization) name += ` (${author.organization})`
            } else {
                name = author.organization || '';
            }
            if(!authorList) {
                authorList = name;
            } else {
                authorList += `, ${authorList}`;
            }
        });
        return authorList;
    }
}