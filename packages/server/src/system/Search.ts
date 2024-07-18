import {Client} from "@elastic/elasticsearch";
import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domaint";
import * as Schema from "hh-orion-schema";
import {Action} from "../types";

export function Search(em: EntityManager, search: Client): Action[] {
    return [
        {
            route: Schema.system.search.query.route,
            action: async (data: Schema.system.search.query.params): Promise<Schema.system.search.query.response> => await new controllers.searchController(em, search).query(data)},
        {
            route: Schema.system.search.indexDocuments.route,
            action: async (): Promise<Schema.system.search.indexDocuments.response> => await new controllers.searchController(em, search).indexDocuments()
        }
    ]
}
