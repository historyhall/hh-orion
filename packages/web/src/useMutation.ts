/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {environment} from './environment';

export function useMutation<T, P>(
	path: string,
): {data?: T; loading: boolean; error?: string; status?: number; call: (params?: P, callback?: (data: T, status?: number) => void) => Promise<void>} {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	async function call(params?: P, callback?: (data: T, status?: number) => void) {
		let paramList = new URLSearchParams(params as Record<string, string>).toString();
		setLoading(true);
		try {
			let url = `${environment.serverURL}/${path}`;
			if (paramList) url += '?' + paramList;

			fetch(url).then(response => {
				response.json().then(json => {
					setData(json);
					setError(undefined);
					callback && callback(json, response.status);
				});
			});
		} catch (error) {
			setError(`${error} Could not Fetch Data `);
		} finally {
			setLoading(false);
		}
	}

	return {data, loading, error, call};
}
