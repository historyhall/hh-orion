import {Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {Author} from '../../accounts';

const d = debug('hh.domain.documents.entities.Document');

export type DocumentEntityConstructor = {
	name: string;
	bytes: number;
	storagePath: string;
	filename: string;
	content: string;
};

@Entity()
export class Document {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'date'})
	createdAt = new Date();

	@Property({type: 'text'})
	name: string;

	@Property({type: 'text'})
	content: string;

	@Property({type: 'number'})
	bytes: number;

	@Property({type: 'text'})
	storagePath: string;

	@Property({type: 'text'})
	filename: string;

	@ManyToMany('Author')
	authors = new Collection<Author>(this);

	constructor({name, bytes, storagePath, filename, content}: DocumentEntityConstructor) {
		d('Domain: Create New Document');
		this.name = name;
		this.bytes = bytes;
		this.storagePath = storagePath;
		this.filename = filename;
		this.content = content;
	}
}
