import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import cors from 'cors';
import debug from 'debug';
import express, {Express} from 'express';
import {controllers} from 'hh-orion-domain/dist';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';

const d = debug('hh.server');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	const app: Express = express();
	const port = environment.serverPort;
	const em = orm.em.fork();
	const corsOptions = {credentials: false, origin: environment.corsOrigin};

	app.options('*', cors(corsOptions));

	app.get('/migrations/get-all', async (req, res) => {
		d(req.ip);
		const controller = new controllers.migrationController(em);
		res.header('Access-Control-Allow-Origin', environment.corsOrigin);
		res.send(await controller.getAll());
	});

	app.listen(port, () => {
		d(`Server is running at http://localhost:${port}`);
	});
});
