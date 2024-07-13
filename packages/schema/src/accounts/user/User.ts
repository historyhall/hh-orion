import {Author} from "../author/Author";

export type User = {
    id: string;
    version: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    authors: Author[]
}