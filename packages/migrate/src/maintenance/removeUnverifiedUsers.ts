import {Migration} from '../types';

export const removeUnverifiedUsers: Migration = {
	name: 'removeUnverifiedUsers',
	action: `DELETE FROM user where expiry_date > CURRENT_TIMESTAMP + INTERVAL '30' day;`,
};
