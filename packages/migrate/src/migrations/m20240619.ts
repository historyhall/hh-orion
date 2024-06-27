export const m20240619 = {
    name: 'm20240619',
    action: [
        'create table "user" ("id" uuid not null, "version" int not null default 1, "first_name" text not null, "last_name" text not null, "joined" date not null, constraint "user_pkey" primary key ("id"));',
    ],
}