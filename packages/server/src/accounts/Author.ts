import {EntityManager} from '@mikro-orm/core';
import {controllers} from 'hh-orion-domain';
import * as Schema from 'hh-orion-schema';
import {Action, UserData} from '../types';

export function Author(em: EntityManager): Action[] {
	return [
		{
			route: Schema.accounts.author.getTotal.route,
			action: async (userData: UserData): Promise<Schema.accounts.author.getTotal.response> =>
				await new controllers.authorController(em, userData).getTotal(),
			requiresAuthorization: false,
		},
	];
}
