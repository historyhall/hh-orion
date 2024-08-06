import {Migration} from '../types';

export const m20240726b: Migration = {
	name: 'm20240726b',
	action: `
		BEGIN;
			alter table "user" alter column "verified" drop default;
			alter table "user" alter column "verified" type boolean using ("verified"::boolean);
		COMMIT;
	`,
};
