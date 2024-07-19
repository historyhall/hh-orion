import {Migration} from '../types';

export const m20240706b: Migration = {
	name: 'm20240706b',
	action: `BEGIN;
                alter table "document" alter column "content" drop default;
                alter table "document" alter column "content" type text using ("content"::text);
            COMMIT;`,
};
