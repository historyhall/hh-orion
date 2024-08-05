import {Readable} from 'node:stream';
import {join} from 'node:path';
import {createWriteStream} from 'fs';
import * as fs from 'node:fs';
import {randomString} from './randomString';

export async function writeToStorage(tmpStream: Readable, tmpFolder: string, extension: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const directory = join(tmpFolder, new Date().getFullYear().toString(), (new Date().getMonth() + 1).toString(), new Date().getDate().toString());
		if (!fs.existsSync(directory)) {
			fs.mkdirSync(directory, {recursive: true});
		}
		const fullPath = join(directory, randomString() + extension);

		const writeStream = createWriteStream(fullPath);
		writeStream.on('close', () => {
			resolve(fullPath);
		});
		writeStream.on('error', error => {
			reject(error);
		});
		tmpStream.pipe(writeStream);
	});
}
