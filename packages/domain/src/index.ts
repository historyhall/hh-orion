import {entities as accountEntities, controllers as accountControllers} from './Accounts';
import {entities as systemEntities, controllers as systemControllers} from './System';
import {EntityClass} from '@mikro-orm/core';
import {Class} from './types';

export const entities: EntityClass<Partial<any>>[] = [...accountEntities, ...systemEntities];
export function controllers(): {[key: string]: Class} {
	return {...accountControllers, ...systemControllers};
}

export * from './Accounts/';
export * from './System/';
