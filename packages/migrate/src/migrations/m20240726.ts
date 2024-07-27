import {Migration} from '../types';

export const m20240726: Migration = {
	name: 'm20240726',
	action: `
			alter table "user" add column "verified" boolean not null default false;
	`,
};
