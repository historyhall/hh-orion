import {entities as accountEntities, controllers as accountControllers} from './accounts';
import {entities as systemEntities, controllers as systemControllers} from './system';
import {EntityClass} from '@mikro-orm/core';
import {Class} from './types';

export const entities: EntityClass<Partial<any>>[] = [...accountEntities, ...systemEntities];
export function controllers(): {[key: string]: Class} {
	return {...accountControllers, ...systemControllers};
}

export * from './accounts/';
export * from './system/';
