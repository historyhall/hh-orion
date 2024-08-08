import {Migration} from '../types';

export const m20240807: Migration = {
	name: 'm20240807',
	action: `
		BEGIN;
			alter table "document" alter column "hash" drop default;
			alter table "document" add column "status" text check ("status" in ('Pending', 'Published')) not null default 'Published';
		COMMIT;
	`,
};
