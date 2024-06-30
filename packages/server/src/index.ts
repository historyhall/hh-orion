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

	app.get('/migrations/get-all', async (req, res) => {
		d('/migrations/get-all', req.body);
		const controller = new controllers.migrationController(em);
		res.status(200).send(await controller.getAll());
	});

	app.get('/documents/get-all', async (req, res) => {
		d('/documents/get-all', req.body);
		const controller = new controllers.documentController(em);
		res.status(200).send(await controller.getAll());
	});

	app.get('/documents/get-total', async (req, res) => {
		d('/documents/get-total', req.body);
		const controller = new controllers.documentController(em);
		res.status(200).send((await controller.getTotal()).toString());
	});

	app.get('/authors/get-all', async (req, res) => {
		d('/authors/get-all', req.body);
		const controller = new controllers.authorController(em);
		res.status(200).send(await controller.getAll());
	});

	app.get('/authors/get-total', async (req, res) => {
		d('/authors/get-total', req.body);
		const controller = new controllers.authorController(em);
		res.status(200).send((await controller.getTotal()).toString());
	});

	app.get('/users/get-all', async (req, res) => {
		d('/users/get-all', req.body);
		const controller = new controllers.userController(em);
		res.status(200).send(await controller.getAll());
	});

	app.get('/users/get-total', async (req, res) => {
		d('/users/get-total', req.body);
		const controller = new controllers.userController(em);
		res.status(200).send((await controller.getTotal()).toString());
	});

	app.listen(port, () => {
		d(`Server is running at ${environment.corsOrigin}`);
	});
});
