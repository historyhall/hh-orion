import {debug} from 'debug';
import Cookies from 'js-cookie';
/* eslint-disable no-unused-vars */
import {environment} from './environment';

const d = debug('hh.web.useMutation');

export function useMutation<T, P>(
	path: string,
): {call: (params?: P, callback?: (data: T, status?: number, error?: string) => void) => Promise<void>} {
	async function call(params?: P, callback?: (data: T, status?: number, error?: string) => void) {
		let paramList = new URLSearchParams(params as Record<string, string>).toString();
		try {
			let url = `${environment.serverURL}/${path}`;
			if (paramList) url += '?' + paramList;

			const headers = new Headers({Authorization: Cookies.get('hh_token') || ''});

			fetch(url, {headers}).then(response => {
				response.json().then(json => {
					if (response.status === 200) {
						callback && callback(json, response.status);
					} else {
						callback && callback(json, response.status, response.statusText);
					}
				});
			});
		} catch (error) {
			d(error);
		}
	}

	return {call};
}
