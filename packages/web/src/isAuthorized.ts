import {Permissions} from './types';
import Cookies from 'js-cookie';

export function isAuthorized(permissions?: Permissions) {
	const isLoggedIn = !!Cookies.get('hh_token');

	// No permissions were defined, we return true;
	if (!permissions) {
		return true;
	}

	// User must be logged in;
	if (permissions.loggedIn && isLoggedIn) {
		return true;
	}

	// User must be logged out;
	if (permissions.loggedOut && !isLoggedIn) {
		return true;
	}
	return false;
}
