import {Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {User} from "./User";

const d = debug('hh.domain.accounts.entities.User');

export type AuthorEntityConstructor = {
    firstName: string;
    lastName: string;
};

@Entity()
export class Author {
    @PrimaryKey({type: 'uuid'})
    id = v4();

    @Property({type: 'number', version: true})
    version = 1;

    @Property({type: 'date'})
    createdAt = new Date();

    @Property({type: 'text'})
    firstName: string;

    @Property({type: 'text'})
    lastName: string;

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
