import {EntityManager} from '@mikro-orm/core';
import {Session} from 'hh-orion-domain';
import {decode} from 'jsonwebtoken';
import {TokenPayload, UserData} from './types';

export async function authenticateUser(em: EntityManager, agent: string, ipAddress: string, token?: string): Promise<UserData> {
	let tokenPayload: TokenPayload | undefined;
	if (token) {
		tokenPayload = decode(token, {complete: true})?.payload as TokenPayload;
	}

	let authenticatedUser;
	if (token && tokenPayload?.id) {
		const sessionRepo = em.getRepository(Session);
		const activeSession = await sessionRepo.findOne({token});
		if (activeSession && activeSession.expiryDate.getTime() > new Date().getTime()) {
			authenticatedUser = {
				userId: tokenPayload?.id,
				token,
			};
		}
	}

	return {
		agent,
		ipAddress,
		authenticatedUser,
	};
}
