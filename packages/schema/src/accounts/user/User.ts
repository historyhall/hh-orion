import {Author} from '../author/Author';

export type User = {
	id: string;
	version: number;
	createdAt: Date;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	verified: boolean;
	authors: Author[];
};
