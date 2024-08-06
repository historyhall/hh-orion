import {Readable} from 'node:stream';
import {join} from 'node:path';
import {createWriteStream} from 'fs';
import * as fs from 'node:fs';
import {randomString} from './randomString';

export async function writeToStorage(tmpStream: Readable, tmpFolder: string, extension: string): Promise<{filename: string; storagePath: string}> {
	return new Promise<{filename: string; storagePath: string}>((resolve, reject) => {
		const storagePath = join(tmpFolder, new Date().getFullYear().toString(), (new Date().getMonth() + 1).toString(), new Date().getDate().toString());
		if (!fs.existsSync(storagePath)) {
			fs.mkdirSync(storagePath, {recursive: true});
		}
		const filename = randomString() + extension;
		const fullPath = join(storagePath, filename);

		const writeStream = createWriteStream(fullPath);
		writeStream.on('close', () => {
			resolve({filename, storagePath});
		});
		writeStream.on('error', error => {
			reject(error);
		});
		tmpStream.pipe(writeStream);
	});
}
