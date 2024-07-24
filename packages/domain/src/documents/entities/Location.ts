import {Entity, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {Country} from './Country';

const d = debug('hh.domain.documents.entities.Location');

export type DocumentEntityConstructor = {
	longitude: string;
	latitude: string;
	country: Country;
};

@Entity()
export class Location {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	longitude: string;

	@Property({type: 'text'})
	latitude: string;

	@ManyToOne('Country')
	country: Country;

	constructor({longitude, latitude, country}: DocumentEntityConstructor) {
		d('Domain: Create New Document');
		this.longitude = longitude;
		this.latitude = latitude;
		this.country = country;
	}
}
