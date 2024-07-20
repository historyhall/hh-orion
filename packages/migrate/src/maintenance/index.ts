import {Migration} from '../types';
import {removeExpiredTokens} from './removeExpiredTokens';
import { removeUnverifiedUsers } from './removeUnverifiedUsers';

export const maintenance: Migration[] = [removeExpiredTokens, removeUnverifiedUsers];
