#!/bin/bash
SOURCE ./server-release/.env

sql="postgres://$DB_USERNAME:$DB_PASSWORD@$DB_DOMAIN:$DB_PORT/$DB_NAME"

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
