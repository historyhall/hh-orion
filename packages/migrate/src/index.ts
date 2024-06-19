import d from 'debug';
import {MikroORM} from '@mikro-orm/core';
import mikroOrmConfig from './core/mikro-orm.config';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import {migrations} from './migrations';
import {Migration} from 'hh-orion-domain/dist/Migration';

d('test.domain');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	const em = orm.em.fork();

	migrations.map(async (migration, index) => {
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
});
