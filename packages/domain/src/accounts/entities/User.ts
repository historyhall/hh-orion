import {Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {Author} from "./Author";

const d = debug('hh.domain.accounts.entities.User');

export type MemberEntityConstructor = {
	firstName: string;
	lastName: string;
};

@Entity()
export class User {
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

	@ManyToMany('Author')
	authors = new Collection<Author>(this);

	constructor({firstName, lastName}: MemberEntityConstructor) {
		d('Domain: Create New User');
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
