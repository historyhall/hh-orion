import {debug} from 'debug';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import {environment} from './environment';

const d = debug('hh.web.useMutation');

export function useUpload(path: string): {
	call: (formData: FormData, callback?: (status?: number, error?: string) => void) => Promise<void>;
} {
	const navigate = useNavigate();
	async function call(formData: FormData, callback?: (status?: number, error?: string) => void) {
		console.log("START");
		try {
			let url = `${environment.uploadURL}/${path}`;

			const headers = new Headers({Authorization: Cookies.get('hh_token') || ''});

			fetch(url, {headers, method: 'POST', body: formData}).then(response => {
				console.log(response);
				response.json().then(() => {
					if (response.status === 200) {
						callback && callback(response.status);
					} else if (response.status === 401) {
						navigate('/profile/logout');
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
