import {EntityClass} from '@mikro-orm/core';
import {entities as accountEntities, controllers as accountControllers} from './accounts';
import {entities as systemEntities, controllers as systemControllers} from './system';

export const entities: EntityClass<Partial<any>>[] = [...accountEntities, ...systemEntities];
export const controllers = {
	...accountControllers,
	...systemControllers,
};

export * from './accounts/';
export * from './system/';
