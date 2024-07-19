import {EntityClass} from '@mikro-orm/core';
import {MigrationController, SearchController} from './controllers';
import {Migration} from './entities';

export const entities: EntityClass<Partial<any>>[] = [Migration];
export const controllers = {
	migrationController: MigrationController,
	searchController: SearchController,
};

export * from './controllers';
export * from './entities';
