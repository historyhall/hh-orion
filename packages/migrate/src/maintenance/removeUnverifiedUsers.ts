import {Migration} from '../types';

export const removeUnverifiedUsers: Migration = {
	name: 'removeUnverifiedUsers',
	action: `DELETE FROM "user" where created_at > CURRENT_TIMESTAMP + INTERVAL '30' day;`,
};
