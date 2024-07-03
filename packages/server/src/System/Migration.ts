import {Action} from "../types";
import {controllers} from "hh-orion-domain/dist";
import {EntityManager} from "@mikro-orm/core";

export function Migration(em: EntityManager): Action[] {
    return [
        {path: '/migrations/get-all', action: async () => await new controllers.migrationController(em).getAll()}
    ]
}
