import {User} from "../user/User";

export type Session = {
    id: string;
    expiryDate: Date;
    user: User;
    token: string;
    ipAddress: string;
}