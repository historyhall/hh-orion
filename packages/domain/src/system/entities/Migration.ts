import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';

const d = debug('hh.domain.system.entities.Migration');

export type MigrationEntityConstructor = {
	name: string;
	success: boolean;
};

@Entity()
export class Migration {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'string'})
	name: string;

	@Property({type: 'date'})
	date = new Date();

	@Property({type: 'boolean'})
	success: boolean;

	constructor({name, success}: MigrationEntityConstructor) {
		d('Domain: Create New Migration');
		this.name = name;
		this.success = success;
	}
}
