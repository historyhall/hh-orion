import {Migration} from '../types';

export const m20240717: Migration = {
	name: 'm20240717',
	action: `BEGIN;
                create table "session" ("id" uuid not null, "expiry_date" date not null, "user_id" uuid not null, "token" text not null, "ip_address" text not null, constraint "session_pkey" primary key ("id"));
                alter table "session" add constraint "session_token_unique" unique ("token");
                alter table "session" add constraint "session_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;
            COMMIT;`,
};
