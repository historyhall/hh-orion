import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {environment} from './environment';
import {pages} from './Account';

export function useFetch<T, P>(path: string, params?: P): {data?: T; loading: boolean; error?: string} {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const navigate = useNavigate();

	let paramList = new URLSearchParams(params as Record<string, string>).toString();

	useEffect(() => {
		setLoading(true);
		try {
			let url = `${environment.serverURL}/${path}`;
			if (paramList) url += '?' + paramList;

			const headers = new Headers({Authorization: Cookies.get('hh_token') || ''});

			fetch(url, {headers}).then(response => {
				if (response.status === 200) {
					response.json().then(json => {
						setData(json);
						setError(undefined);
					});
				} else if (response.status === 401) {
					navigate(pages.logout.path);
				} else {
					setError(response.statusText);
				}
			});
		} catch (error) {
			setError(`${error}`);
		} finally {
			setLoading(false);
		}
	}, [paramList, setError, path, navigate]);

	return {data, loading, error};
}
