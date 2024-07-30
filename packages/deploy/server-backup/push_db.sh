#!/usr/bin/env bash
source .env

sql="postgres://$PUSH_DB_USERNAME:$PUSH_DB_PASSWORD@$PUSH_DB_DOMAIN:$PUSH_DB_PORT/$PUSH_DB_NAME"

psql "$sql" <<EOF
  DO \$\$ DECLARE
  r RECORD;
  BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
      EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;
  END \$\$;
EOF

psql "$sql" < history_hall.sql
