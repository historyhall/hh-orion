#!/usr/bin/env bash
source .env

sql="postgres://$DB_USERNAME:$DB_PASSWORD@$DB_DOMAIN:$DB_PORT/$DB_NAME"

pg_dump -v "$sql" > history_hall.sql
