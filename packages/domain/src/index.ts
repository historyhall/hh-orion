import {accounts} from './Accounts';
import {system} from './System';
import {Domain} from './types';

export const domain: Domain[] = [accounts, system];

export * from './Accounts/';
export * from './System/';
