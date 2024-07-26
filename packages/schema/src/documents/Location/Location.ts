import {Country} from '../Country/Country';

export type Location = {
	id: string;
	version: number;
	longitude: string;
	latitude: string;
	country: Country;
};
