import {Check, Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {User} from "./User";

const d = debug('hh.domain.accounts.entities.Author');

export type AuthorEntityConstructor = {
    firstName: string;
    lastName: string;
};

@Entity()
@Check({name: 'name_or_organization', expression: '(first_name IS NOT NULL AND last_name IS NOT NULL) OR organization IS NOT NULL'})
export class Author {
    @PrimaryKey({type: 'uuid'})
    id = v4();

    @Property({type: 'number', version: true})
    version = 1;

    @Property({type: 'date'})
    createdAt = new Date();

    @Property({type: 'text', nullable: true})
    firstName?: string;

    @Property({type: 'text', nullable: true})
    lastName?: string;

    @Property({type: 'text', nullable: true})
    organization?: string;

    @ManyToMany('User', 'authors', {nullable: true})
    authorizedUsers = new Collection<User>(this);

    @ManyToMany('Document', 'authors')
    documents = new Collection<Document>(this);

    constructor({firstName, lastName}: AuthorEntityConstructor) {
        d('Domain: Create New Author');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
