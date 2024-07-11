import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Migration(em: EntityManager): Action[] {
    return [
        {route: Schema.System.Migration.routes.getAll, action: async () => await new controllers.migrationController(em).getAll()}
    ]
}