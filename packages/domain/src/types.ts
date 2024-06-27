import {EntityClass, EntityRepository} from '@mikro-orm/core';

export type Class = {
	em: EntityRepository<any>;
};

export type Domain = {
	entities: EntityClass<Partial<any>>[];
	controllers: Class[];
};
