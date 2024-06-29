#!/bin/bash
SOURCE ./server-release/.env

sql="postgres://$DB_USERNAME:$DB_PASSWORD@$DB_DOMAIN:$DB_PORT/$DB_NAME"

pg_dump "$sql" > history_hall.sql
