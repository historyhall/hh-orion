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
	const corsOptions = {credentials: true, origin: environment.corsOrigin};

	debug.enable(environment.debug);

	app.use(cors(corsOptions));

	// eslint-disable-next-line no-unused-vars
	const routes: {path: string; action: (data: any) => Promise<any>}[] = [
		{path: '/migrations/get-all', action: async () => await new controllers.migrationController(em).getAll()},
		{path: '/documents/get-all', action: async () => await new controllers.documentController(em).getAll()},
		{path: '/documents/get-by-id', action: async data => await new controllers.documentController(em).getById(data)},
		{path: '/documents/get-total', action: async () => await new controllers.documentController(em).getTotal()},
		{path: '/authors/get-all', action: async () => await new controllers.authorController(em).getAll()},
		{path: '/authors/get-total', action: async () => await new controllers.authorController(em).getTotal()},
		{path: '/users/get-all', action: async () => await new controllers.userController(em).getAll()},
		{path: '/users/get-total', action: async () => await new controllers.userController(em).getTotal()},
	];

	routes.map(route => {
		app.get(route.path, async (req, res) => {
			try {
				d(route.path, req.query, req.query.data0);
				res.status(200).send(JSON.stringify(await route.action(req.query?.data0)));
			} catch (error) {
				d(error);
			}
		});
	});

	app.listen(port, () => {
		d(`Server is running at ${environment.corsOrigin}`);
	});
});
