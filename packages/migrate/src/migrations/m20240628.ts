export const m20240628 = {
    name: 'm20240628',
    action: [
        `BEGIN;
            create table "author" ("id" uuid not null, "version" int not null default 1, "created_at" date not null, "first_name" text not null, "last_name" text not null, constraint "author_pkey" primary key ("id"));
            create table "document" ("id" uuid not null, "version" int not null default 1, "created_at" date not null, "name" text not null, "bytes" int not null, "storage_path" text not null, "filename" text not null, constraint "document_pkey" primary key ("id"));
            create table "document_authors" ("document_id" uuid not null, "author_id" uuid not null, constraint "document_authors_pkey" primary key ("document_id", "author_id"));
            create table "user_authors" ("user_id" uuid not null, "author_id" uuid not null, constraint "user_authors_pkey" primary key ("user_id", "author_id"));
            alter table "document_authors" add constraint "document_authors_document_id_foreign" foreign key ("document_id") references "document" ("id") on update cascade on delete cascade;
            alter table "document_authors" add constraint "document_authors_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade on delete cascade;
            alter table "user_authors" add constraint "user_authors_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade on delete cascade;
            alter table "user_authors" add constraint "user_authors_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade on delete cascade;
        COMMIT;`
    ],
}