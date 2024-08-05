import debug from 'debug';
import type {Readable} from 'node:stream';
import {BusboyChecker} from './BusboyChecker';
// @ts-ignore
import HashTransform from 'hash-transform';
import {writeToStorage} from './lib/writeToStorage';
import {mimeTypeToFileExtension} from './lib/mimeTypeToFileExtension';

const d = debug('hh.file-upload.upload.endpoints.fileUpload');

export interface Request {
	busboy?: BusboyChecker;
	pipe: (destination: BusboyChecker) => void;
	on: (key: 'finish' | 'aborted' | 'error', listener: () => void) => void;
}

export async function upload(req: Request) {
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

			const duplicate = false;
			// TODO handle duplicate
			if (!duplicate) {
				const hash = new HashTransform('sha256');
				const tmpFile = await writeToStorage(readable.pipe(hash), storagePath, mimeTypeToFileExtension(fileData.mimeType));
				console.log(tmpFile, storagePath, hash.hash);
				code = 200;
			} else if (duplicate) {
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
