import {Migration} from '../types';

export const m20240721: Migration = {
	name: 'm20240721',
	action: `BEGIN;
      create table "country" ("id" uuid not null, "version" int not null default 1, "name" text not null, "code" text not null, constraint "country_pkey" primary key ("id"));
			alter table "country" add constraint "country_name_unique" unique ("name");
			alter table "country" add constraint "country_code_unique" unique ("code");
			
			create table "location" ("id" uuid not null, "version" int not null default 1, "longitude" text not null, "latitude" text not null, "country_id" uuid not null, constraint "location_pkey" primary key ("id"));
			
			alter table "location" add constraint "location_country_id_foreign" foreign key ("country_id") references "country" ("id") on update cascade;
  COMMIT;`,
};
