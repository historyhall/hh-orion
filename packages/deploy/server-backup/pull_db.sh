#!/usr/bin/env bash
source .env

sql="postgres://$PULL_DB_USERNAME:$PULL_DB_PASSWORD@$PULL_DB_DOMAIN:$PULL_DB_PORT/$PULL_DB_NAME"

pg_dump -v "$sql" > history_hall.sql
