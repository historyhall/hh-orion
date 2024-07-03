import {Migration} from "./Migration";
import {EntityManager} from "@mikro-orm/core";

export function System(em: EntityManager) {
    return [
        ...Migration(em),
    ]
}