import {Entity, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';

const d = debug('hh.domain.System.Migration');

export type MigrationEntityConstructor = {
	name: string;
	index: number;
	success: boolean;
};

@Entity()
@Unique({properties: ['index']})
export class Migration {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'string'})
	name: string;

	@Property({type: 'number'})
	index: number;

	@Property({type: 'date'})
	date = new Date();

	@Property({type: 'boolean'})
	success: boolean;

	constructor({name, success, index}: MigrationEntityConstructor) {
		this.name = name;
		this.success = success;
		this.index = index;
		d('Migration Constructor');
	}
}
