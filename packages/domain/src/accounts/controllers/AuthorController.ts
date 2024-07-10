import {Collection, EntityManager} from "@mikro-orm/core";
import {Author} from "../entities";

export class AuthorController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(Author);
    }

    getAll() {
        return this.em.find({});
    }

    getTotal() {
        return this.em.count({})
    }

    async generateAuthorsList(authors: Collection<Author,  object>) {
        console.log(authors);
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
        })
        console.log(authorList);
        return authorList;
    }
}