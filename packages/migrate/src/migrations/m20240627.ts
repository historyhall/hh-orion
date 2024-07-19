import {Migration} from '../types';

export const m20240627: Migration = {
	name: 'm20240627',
	action: 'alter table "user" rename column "joined" to "created_at";',
};
