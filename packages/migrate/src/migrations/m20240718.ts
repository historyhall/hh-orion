import {Migration} from "../types";

export const m20240718: Migration = {
    name: 'm20240718',
    action: `BEGIN;
                alter table "session" add column "agent" text not null;
            COMMIT;`,
}