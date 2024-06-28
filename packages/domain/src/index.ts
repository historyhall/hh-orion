import {EntityClass} from '@mikro-orm/core';
import {entities as accountEntities, controllers as accountControllers} from './accounts';
import {entities as documentEntities, controllers as documentControllers} from './documents';
import {entities as systemEntities, controllers as systemControllers} from './system';

export const entities: EntityClass<Partial<any>>[] = [...accountEntities, ...documentEntities, ...systemEntities];
export const controllers = {
	...accountControllers,
	...documentControllers,
	...systemControllers,
};

export * from './accounts/';
export * from './system/';
