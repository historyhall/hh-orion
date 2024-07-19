import {Migration} from "../types";
import {removeExpiredTokens} from "./removeExpiredTokens";

export const maintenance: Migration[] = [
    removeExpiredTokens
];