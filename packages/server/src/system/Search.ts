import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Search(em: EntityManager): Action[] {
    return [
        {route: Schema.System.Search.routes.search, action: async () => await new controllers.searchController(em).search()},
        {route: Schema.System.Search.routes.indexDocuments, action: async () => await new controllers.searchController(em).indexDocuments()}
    ]
}
