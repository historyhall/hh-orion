import {genSalt, hash} from "bcrypt";

export async function passwordHash(password: string) {
    const salt = await genSalt(10);
    return hash(password, salt);
}