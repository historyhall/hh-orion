import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import debug from 'debug';
import {Migration} from 'hh-orion-domain/dist/Migration';
import mikroOrmConfig from './core/mikro-orm.config';
import {migrations} from './migrations';

const d = debug('hh.migrate');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(async orm => {
	const em = orm.em.fork();

	try {
		d('Check if migration table exists...');
		await em.find(Migration, {});
	} catch {
		d('Insert migration table');
		em.execute(`
				create table "migration" ("id" uuid not null, "name" varchar(255) not null, "index" int not null, "date" date not null, "success" boolean not null, constraint "migration_pkey" primary key ("id"));
				alter table "migration" add constraint "migration_index_unique" unique ("index");`);
	}

	migrations.map(async (migration, index) => {
		d(`Run migration: ${migration.name}`);
		const duplicateMigration = await em.find(Migration, {name: migration.name});
		if (duplicateMigration.length === 0) {
			migration.action.map(async action => {
				await em.execute(action);

				return true;
			});

			const mig = new Migration({
				name: migration.name,
				success: true,
				index,
			});

			await em.persistAndFlush(mig);
		}
	});

	await orm.close();
});
