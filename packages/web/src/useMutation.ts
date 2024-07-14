import {useState} from 'react';
import {environment} from './environment';

// eslint-disable-next-line no-unused-vars
export function useMutation<T>(path: string): {data?: T; loading: boolean; error?: string; call: (params?: string[]) => Promise<void>} {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	async function call(params?: string[]) {
		let paramList = '';
		params?.forEach((param, index) => {
			paramList = `${paramList}data${index}=${param}&`;
		});
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

	return {data, loading, error, call};
}
