import {Migration} from "../types";

export const removeExpiredTokens: Migration = {
    name: 'removeExpiredTokens',
    action: `DELETE FROM session where expiry_date < CURRENT_TIMESTAMP;`
}