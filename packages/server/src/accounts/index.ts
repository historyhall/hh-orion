import {User} from "./User";
import {Author} from "./Author";
import {EntityManager} from "@mikro-orm/core";

export function Accounts(em: EntityManager) {
    return [
        ...Author(em),
        ...User(em)
    ]
}