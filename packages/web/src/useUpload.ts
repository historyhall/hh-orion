import {debug} from 'debug';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import {environment} from './environment';
import {pages} from './Account';

const d = debug('hh.web.useUpload');

export function useUpload(): {
	call: (formData: FormData, callback?: (status?: number, error?: string) => void) => Promise<void>;
} {
	const navigate = useNavigate();
	async function call(formData: FormData, callback?: (status?: number, error?: string) => void) {
		try {
			let url = `${environment.uploadURL}/upload`;

			const headers = new Headers({Authorization: Cookies.get('hh_token') || ''});

			fetch(url, {headers, method: 'POST', body: formData}).then(response => {
				response.json().then(() => {
					if (response.status === 200) {
						callback && callback(response.status);
					} else if (response.status === 401) {
						navigate(pages.logout.path);
					} else {
						callback && callback(response.status, response.statusText);
					}
				});
			});
		} catch (error) {
			d(error);
		}
	}

	return {call};
}
