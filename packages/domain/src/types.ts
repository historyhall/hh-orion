import {EntityClass} from '@mikro-orm/core';

export type Domain = {
	entities: EntityClass<Partial<any>>[];
};
