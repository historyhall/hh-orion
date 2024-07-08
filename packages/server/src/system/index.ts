import {EntityManager} from "@mikro-orm/core";
import {Migration} from "./Migration";
import {Search} from './Search';

export function System(em: EntityManager) {
    return [
        ...Migration(em),
        ...Search(em),
    ]
}
