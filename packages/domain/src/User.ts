import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';

const d = debug('hh.server.Entities.Member');

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

	@Property({type: 'text'})
	firstName: string;

	@Property({type: 'text'})
	lastName: string;

	@Property({type: 'date'})
	joined = new Date();

	constructor({firstName, lastName}: MemberEntityConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
		d('User Constructor');
	}
}
