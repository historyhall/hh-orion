import {Client} from "@elastic/elasticsearch";
import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import * as Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Search(em: EntityManager, search: Client): Action[] {
    return [
        {route: Schema.system.search.query.route, action: async data => await new controllers.searchController(em, search).query(data)},
        {route: Schema.system.search.indexDocuments.route, action: async () => await new controllers.searchController(em, search).indexDocuments()}
    ]
}
