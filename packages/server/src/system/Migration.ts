import {EntityManager} from '@mikro-orm/core';
import {controllers} from 'hh-orion-domain';
import * as Schema from 'hh-orion-schema';
import {Action, UserData} from '../types';

export function Migration(em: EntityManager): Action[] {
	return [
		{
			route: Schema.system.migration.getAll.route,
			action: async (userData: UserData): Promise<Schema.system.migration.getAll.response> =>
				await new controllers.migrationController(em, userData).getAll(),
			requiresAuthorization: true,
		},
	];
}
