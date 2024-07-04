import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";

export function Migration(em: EntityManager): Action[] {
    return [
        {route: '/migrations/get-all', action: async () => await new controllers.migrationController(em).getAll()}
    ]
}
