import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import * as Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Migration(em: EntityManager): Action[] {
    return [
        {
            route: Schema.system.migration.getAll.route,
            action: async (): Promise<Schema.system.migration.getAll.response> => await new controllers.migrationController(em).getAll()
        }
    ]
}
