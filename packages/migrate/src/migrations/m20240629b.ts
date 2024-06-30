import {Migration} from "../types";

export const m20240629b: Migration = {
    name: 'm20240629b',
    action: `BEGIN;
                alter table "author" add column "organization" text null;
                alter table "author" alter column "first_name" type text using ("first_name"::text);
                alter table "author" alter column "first_name" drop not null;
                alter table "author" alter column "last_name" type text using ("last_name"::text);
                alter table "author" alter column "last_name" drop not null;
                alter table "author" add constraint name_or_organization check((first_name IS NOT NULL AND last_name IS NOT NULL) OR organization IS NOT NULL);
            COMMIT;`,
}