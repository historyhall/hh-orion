import {Migration} from "../types";

export const m20240702: Migration = {
    name: 'm20240702',
    action: `BEGIN;
                alter table "user" add column "email" text not null, add column "password" text not null;
            COMMIT;`,
}