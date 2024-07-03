import {Document} from "./Document";
import {EntityManager} from "@mikro-orm/core";

export function Documents(em: EntityManager) {
    return [
        ...Document(em),
    ]
}
