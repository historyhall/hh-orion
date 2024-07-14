import {User} from './User';

export type response = User;
export type params = {firstName: string, lastName: string, email: string, password1: string, password2: string};
export const route = 'user/register';