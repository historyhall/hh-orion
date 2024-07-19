import {EntityClass, EntityRepository} from '@mikro-orm/core';

export type Class = {
	em: EntityRepository<any>;
};

export type Domain = {
	entities: EntityClass<Partial<any>>[];
	controllers: Class[];
};

export type UserData = {
	agent: string;
	ipAddress: string;
	authenticatedUser?: {
		userId: string;
		token: string;
	};
};

export type TokenConstructor = {
	id: string;
	email: string;
};

export type TokenPayload = {
	iat: number;
	exp: number;
} & TokenConstructor;
