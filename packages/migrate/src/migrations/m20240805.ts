import {Migration} from '../types';

export const m20240805: Migration = {
	name: 'm20240805',
	action: `
	alter table "document" add column "hash" text not null default '0';
	`,
};
