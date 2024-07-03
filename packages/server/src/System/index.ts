import {EntityManager} from "@mikro-orm/core";
import {Migration} from "./Migration";

export function System(em: EntityManager) {
    return [
        ...Migration(em),
    ]
}