import {Migration} from "../types";

export const m20240706: Migration = {
    name: 'm20240706',
    action: `BEGIN;
                alter table "user" add column "email" text not null, add column "password" text not null;
            COMMIT;`,
}