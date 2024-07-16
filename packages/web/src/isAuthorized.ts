import {Permissions} from './types';

export function isAuthorized(isLoggedIn: boolean, permissions?: Permissions) {
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
