import {Client} from "@elastic/elasticsearch";
import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Search(em: EntityManager, search: Client): Action[] {
    return [
        {route: Schema.System.Search.routes.query, action: async data => await new controllers.searchController(em, search).query(data)},
        {route: Schema.System.Search.routes.indexDocuments, action: async () => await new controllers.searchController(em, search).indexDocuments()}
    ]
}
