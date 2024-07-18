import {EntityManager} from "@mikro-orm/core";
import {Author} from "./Author";
import {Session} from "./Session";
import {User} from "./User";

export function Accounts(em: EntityManager, tokenSecret: string) {
    return [
        ...Author(em),
        ...Session(em),
        ...User(em, tokenSecret)
    ]
}