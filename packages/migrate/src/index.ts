import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import debug from 'debug';
import {Migration} from 'hh-orion-domain/dist';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';
import {maintenance} from './maintenance';
import {migrations} from './migrations';

const d = debug('hh.migrate');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(async orm => {
	const em = orm.em.fork();
	debug.enable(environment.debug);

	try {
		d('Check if migration table exists...');
		await em.find(Migration, {});
	} catch {
		d('Insert migration table');
		await em.execute(`
				create table "migration" ("id" uuid not null, "name" varchar(255) not null, "index" int not null, "date" date not null, "success" boolean not null, constraint "migration_pkey" primary key ("id"));
				alter table "migration" add constraint "migration_index_unique" unique ("index");`);
	}

	await Promise.all(
		migrations.map(async migrationTask => {
			const duplicateMigration = await em.find(Migration, {name: migrationTask.name, success: true});
			if (duplicateMigration.length === 0) {
				let migration;
				try {
					d(`Run migration: ${migrationTask.name}`);
					await em.transactional(async () => {
						await em.execute(migrationTask.action);
					});

					migration = new Migration({
						name: migrationTask.name,
						success: true,
					});
				} catch {
					migration = new Migration({
						name: migrationTask.name,
						success: false,
					});
				}
				await em.persistAndFlush(migration);
			}
		}),
	);

	await Promise.all(
		maintenance.map(async job => {
			let migration;
			try {
				d(`Run maintenance: ${job.name}`);
				await em.transactional(async () => {
					await em.execute(job.action);
				});

				migration = new Migration({
					name: job.name,
					success: true,
				});
			} catch {
				migration = new Migration({
					name: job.name,
					success: false,
				});
			}
			await em.persistAndFlush(migration);
		}),
	);

	await orm.close();
});
