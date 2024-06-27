import {useEffect, useState} from 'react';

export function useFetch(path: string) {
	const serverURL = process.env.REACT_APP_API_URL || 'https://historyhall.org';
	const [data, setData] = useState<unknown>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(`${serverURL}/${path}`);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const json = await response.json();
				setLoading(false);
				setData(json);
				setError(undefined);
			} catch (error) {
				setError(`${error} Could not Fetch Data `);
				setLoading(false);
			}
		};
		fetchData().catch(setError);
	}, [path, serverURL]);
	return {data, loading, error};
}
