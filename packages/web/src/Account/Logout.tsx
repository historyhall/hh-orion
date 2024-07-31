import * as Schema from 'hh-orion-schema';
import Cookies from 'js-cookie';
import {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useMutation} from '../useMutation';

export function Logout() {
	const navigate = useNavigate();
	const {call} = useMutation<Schema.accounts.user.logout.response, Schema.accounts.user.logout.params>(Schema.accounts.user.logout.route);

	useEffect(() => {
		const token = Cookies.get('hh_token');
		if (!!token) {
			call(undefined, () => {
				Cookies.remove('hh_token');
				toast.success('You have been logged out!');
				navigate('/');
			}).catch(error => toast.error(error));
		}
	});

	return <Fragment />;
}
