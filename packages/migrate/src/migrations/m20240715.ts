import {Migration} from "../types";

export const m20240715: Migration = {
    name: 'm20240715',
    action: `BEGIN;
                alter table "user" add constraint "user_email_unique" unique ("email");
            COMMIT;`,
}