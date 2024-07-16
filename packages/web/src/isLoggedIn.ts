import Cookies from 'js-cookie';

export function isLoggedIn() {
	return !!Cookies.get('hh_token');
}
