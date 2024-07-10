import {useEffect, useState} from 'react';
import {environment} from './environment';

export function useFetch<T>(path: string, params?: string[], wait?: boolean): {data?: T; loading: boolean; error?: string} {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	let paramList = '';
	params?.forEach((param, index) => {
		paramList = `${paramList}data${index}=${param}&`;
	});

	useEffect(() => {
		if (wait !== true) {
			setLoading(true);
			try {
				let url = `${environment.serverURL}/${path}`;
				if (paramList) url += '?' + paramList;

				fetch(url).then(response => {
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
		}
	}, [paramList, setError, path, wait]);

	return {data, loading, error};
}
