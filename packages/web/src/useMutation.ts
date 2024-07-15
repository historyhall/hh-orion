/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {environment} from './environment';
import {debug} from 'debug';

const d = debug('hh.Profile.Register');

export function useMutation<T, P>(
	path: string,
): {loading: boolean; call: (params?: P, callback?: (data: T, status?: number, error?: string) => void) => Promise<void>} {
	const [loading, setLoading] = useState<boolean>(false);

	async function call(params?: P, callback?: (data: T, status?: number, error?: string) => void) {
		let paramList = new URLSearchParams(params as Record<string, string>).toString();
		setLoading(true);
		try {
			let url = `${environment.serverURL}/${path}`;
			if (paramList) url += '?' + paramList;

			fetch(url).then(response => {
				response.json().then(json => {
					if (response.status === 200) {
					} else {
						callback && callback(json, response.status, response.statusText);
					}
				});
			});
		} catch (error) {
			d(error);
		} finally {
			setLoading(false);
		}
	}

	return {loading, call};
}
