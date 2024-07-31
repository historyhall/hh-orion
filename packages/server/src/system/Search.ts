import {Client} from '@elastic/elasticsearch';
import {EntityManager} from '@mikro-orm/core';
import {controllers} from 'hh-orion-domain';
import * as Schema from 'hh-orion-schema';
import {Action, UserData} from '../types';

export function Search(em: EntityManager, search: Client): Action[] {
	return [
		{
			route: Schema.system.search.indexDocuments.route,
			action: async (userData: UserData): Promise<Schema.system.search.indexDocuments.response> =>
				await new controllers.searchController(em, userData, search).indexDocuments(),
			requiresAuthorization: true,
		},
		{
			route: Schema.system.search.indexStatistics.route,
			action: async (userData: UserData): Promise<Schema.system.search.indexStatistics.response> =>
				await new controllers.searchController(em, userData, search).indexStatistics(),
			requiresAuthorization: true,
		},
		{
			route: Schema.system.search.query.route,
			action: async (userData: UserData, data: Schema.system.search.query.params): Promise<Schema.system.search.query.response> =>
				await new controllers.searchController(em, userData, search).query(data),
			requiresAuthorization: false,
		},
	];
}
