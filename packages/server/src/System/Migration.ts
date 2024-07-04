import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";
import {schema} from "hh-orion-schema/dist";

export function Migration(em: EntityManager): Action[] {
    return [
        {route: schema.system.migration.getAll.route, action: async () => await new controllers.migrationController(em).getAll()}
    ]
}
