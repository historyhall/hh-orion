import {User} from '../user/User';

export type Author = {
	id: string;
	version: number;
	createdAt: Date;
	firstName?: string;
	lastName?: string;
	organization?: string;
	authorizedUsers: User[];
	documents: Document[];
};
