import Cookies from 'js-cookie';
import {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

export function Logout() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!!Cookies.get('hh_token')) {
			Cookies.remove('hh_token');
			toast.success('You have been logged out!');
			navigate('/');
		}
	});

	return <Fragment />;
}
