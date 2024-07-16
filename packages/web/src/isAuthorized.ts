import {Permissions} from './types';
import Cookies from 'js-cookie';

export function isAuthorized(permissions?: Permissions) {
	const isLoggedIn = !!Cookies.get('hh_token');

	if (permissions?.loggedIn && isLoggedIn) {
		return true;
	} else if (permissions?.loggedOut && !isLoggedIn) {
		return true;
	} else if (!permissions) {
		return true;
	}
	return false;
}
