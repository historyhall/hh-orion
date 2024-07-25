import {Author} from '../../accounts/author/Author';
import {Location} from '../Location/Location';

export type Document = {
	id: string;
	version: number;
	name: string;
	createdAt: Date;
	bytes: number;
	storagePath: string;
	filename: string;
	content: string;
	authors: Author[];
	location: Location;
};
