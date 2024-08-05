import debug from 'debug';
import type {Readable} from 'node:stream';
import {BusboyChecker} from './BusboyChecker';
import {DocumentController} from 'hh-orion-domain';
// @ts-ignore
import HashTransform from 'hash-transform';
import {writeToStorage} from './lib/writeToStorage';
import {mimeTypeToFileExtension} from './lib/mimeTypeToFileExtension';
import {Connection, EntityManager, IDatabaseDriver} from '@mikro-orm/core';
import {PostgreSqlDriver, SqlEntityManager} from '@mikro-orm/postgresql';
import * as fs from 'node:fs';
import {UserData} from 'hh-orion-domain';

const d = debug('hh.file-upload.upload.endpoints.fileUpload');

export interface Request {
	busboy?: BusboyChecker;
	pipe: (destination: BusboyChecker) => void;
	on: (key: 'finish' | 'aborted' | 'error', listener: () => void) => void;
}

export async function upload(req: Request, em: SqlEntityManager<PostgreSqlDriver> & EntityManager<IDatabaseDriver<Connection>>, userData: UserData) {
	const storagePath = 'assets/content';
	if (!req.busboy) {
		throw new Error('no multipart');
	}

	const busboyFinished = new BusboyChecker(req.busboy);

	let code: number = 500;

	await new Promise((resolve, reject) => {
		req.busboy?.on('file', async (fieldName: string, readable: Readable, fileData: {filename: string; encoding: string; mimeType: string}) => {
			d(`Starting: ${fileData.filename} ${fileData.mimeType}`);
			busboyFinished.startFile(fieldName, fileData.filename);
			const documentController = new DocumentController(em, userData);

			const hash = new HashTransform('sha256');
			const filePath = await writeToStorage(readable.pipe(hash), storagePath, mimeTypeToFileExtension(fileData.mimeType));

			const duplicateCount = await documentController.documentExists(hash);
			if (duplicateCount === 0) {
				//TODO create document entity
				console.log(filePath, storagePath, hash.hash);
				code = 200;
			} else {
				fs.unlink(filePath, err => d(err));
				code = 522;
				return;
			}

			busboyFinished.endFile(fieldName, fileData.filename);
			resolve(code);
		});

		req.on('aborted', () => {
			code = 500;
			reject();
		});

		req.on('error', () => {
			code = 500;
			reject();
		});
		if (req.busboy) {
			req.pipe(req.busboy);
		}
	});

	return code;
}
