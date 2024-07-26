import {Migration} from '../types';

export const m20240723: Migration = {
	name: 'm20240723',
	action: `
		BEGIN;
		alter table "document" add column "location_id" uuid null;
		alter table "document" add constraint "document_location_id_foreign" foreign key ("location_id") references "location" ("id") on update cascade;
		alter table "document" add constraint "document_location_id_unique" unique ("location_id");
		COMMIT;
	`,
};
