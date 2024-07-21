import {Entity, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';

const d = debug('hh.domain.documents.entities.Document');

export type CountryEntityConstructor = {
	name: string;
	code: string;
};

@Entity()
export class Country {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	@Unique()
	name: string;

	@Property({type: 'text'})
	@Unique()
	code: string;

	constructor({name, code}: CountryEntityConstructor) {
		d('Domain: Create New Country');
		this.name = name;
		this.code = code;
	}
}
