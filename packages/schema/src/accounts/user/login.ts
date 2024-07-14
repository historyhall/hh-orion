import {User} from './User';

export type response = User;
export type params = {email: string, password: string};
export const route = 'user/login';