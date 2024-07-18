import {useEffect, useState} from 'react';
import {environment} from './environment';
import Cookies from 'js-cookie';

export function useFetch<T, P>(path: string, params?: P): {data?: T; loading: boolean; error?: string} {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	let paramList = new URLSearchParams(params as Record<string, string>).toString();

	useEffect(() => {
		setLoading(true);
		try {
			let url = `${environment.serverURL}/${path}`;
			if (paramList) url += '?' + paramList;

			const headers = new Headers({Authorization: Cookies.get('hh_token') || ''});

			fetch(url, {headers}).then(response => {
				if (!response.ok) {
					setError(response.statusText);
				} else {
					response.json().then(json => {
						setData(json);
						setError(undefined);
					});
				}
			});
		} catch (error) {
			setError(`${error} Could not Fetch Data `);
		} finally {
			setLoading(false);
		}
	}, [paramList, setError, path]);

	return {data, loading, error};
}
