import {Migration} from '../types';

export const m20240706: Migration = {
	name: 'm20240706',
	action: `BEGIN;
                alter table "document" add column "content" text not null default 'test';
            COMMIT;`,
};
