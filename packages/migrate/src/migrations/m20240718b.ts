import {Migration} from '../types';

export const m20240718b: Migration = {
	name: 'm20240718b',
	action: `BEGIN;
                DELETE FROM session;
                alter table "session" alter column "expiry_date" type timestamptz using ("expiry_date"::timestamptz);
            COMMIT;`,
};
