import {EntityManager} from '@mikro-orm/core';
import {Document} from './Document';

export function Documents(em: EntityManager) {
	return [...Document(em)];
}
