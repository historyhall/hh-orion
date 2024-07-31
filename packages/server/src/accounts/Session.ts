import {EntityManager} from '@mikro-orm/core';
import {controllers} from 'hh-orion-domain';
import * as Schema from 'hh-orion-schema';
import {Action, UserData} from '../types';

export function Session(em: EntityManager): Action[] {
	return [
		{
			route: Schema.accounts.session.getByActiveUserId.route,
			action: async (userData: UserData): Promise<Schema.accounts.session.getByActiveUserId.response> => {
				const sessions = await new controllers.sessionController(em, userData).getByActiveUserId();

				// @ts-ignore
				return sessions.map(session => {
					const authors = session.user?.authors?.toArray();
					return {...session, user: {...session.user, authors}};
				});
			},
			requiresAuthorization: true,
		},
		{
			route: Schema.accounts.session.deleteById.route,
			action: async (userData: UserData, data): Promise<Schema.accounts.session.deleteById.response> =>
				new controllers.sessionController(em, userData).deleteById(data),
			requiresAuthorization: true,
		},
	];
}
