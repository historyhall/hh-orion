import {EntityManager} from "@mikro-orm/core";
import {Migration} from "./Migration";
import {Search} from './Search';
import {Client} from "@elastic/elasticsearch";

export function System(em: EntityManager, search: Client) {
    return [
        ...Migration(em),
        ...Search(em, search),
    ]
}
