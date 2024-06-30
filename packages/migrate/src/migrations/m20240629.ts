import {Migration} from "../types";

export const m20240629: Migration = {
    name: 'm20240629',
    action: `BEGIN;
                alter table "migration" drop constraint "migration_index_unique";
                alter table "migration" drop column "index";
            COMMIT;`,
}