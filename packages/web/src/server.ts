import {useEffect, useState} from 'react';

export function useFetch<T>(path: string, params?: string[]): {data?: T; loading: boolean; error?: string} {
	const serverURL = process.env.REACT_APP_API_URL || 'https://api.historyhall.org';
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	let paramList = '';
	params?.forEach((param, index) => {
		paramList = `${paramList}data${index}=${param}&`;
	});

	useEffect(() => {
		if (paramList) {
			setLoading(true);
			try {
				let url = `${serverURL}/${path}`;
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
	}, [paramList, setError, path, serverURL]);

	return {data, loading, error};
}
