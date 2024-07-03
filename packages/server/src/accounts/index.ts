import {EntityManager} from "@mikro-orm/core";
import {Author} from "./Author";
import {User} from "./User";

export function Accounts(em: EntityManager) {
    return [
        ...Author(em),
        ...User(em)
    ]
}