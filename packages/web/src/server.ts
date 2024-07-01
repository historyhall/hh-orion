import {useEffect, useState} from 'react';

export function useFetch<T>(path: string, params?: string[]): {data?: T; loading: boolean; error?: string} {
	const serverURL = process.env.REACT_APP_API_URL || 'https://api.historyhall.org';
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	async function fetchData() {
		setLoading(true);
		try {
			let paramList = '';

			params?.forEach((param, index) => {
				paramList = `${paramList}data${index}=${param}&`;
			});

			let url = `${serverURL}/${path}`;

			if (paramList) url += '?' + paramList;
			const response = await fetch(url);
			if (!response.ok) {
				setError(response.statusText);
			} else {
				const json = await response.json();
				setData(json);
				setError(undefined);
			}
		} catch (error) {
			setError(`${error} Could not Fetch Data `);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if(params) {
			fetchData().catch(setError);
		}
	}, []);

	return {data, loading, error};
}
