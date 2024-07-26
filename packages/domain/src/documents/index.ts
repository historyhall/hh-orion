import {EntityClass} from '@mikro-orm/core';
import {DocumentController} from './controllers';
import {Country, Document, Location} from './entities';

export const entities: EntityClass<Partial<any>>[] = [Country, Document, Location];
export const controllers = {
	documentController: DocumentController,
};

export * from './controllers';
export * from './entities';
