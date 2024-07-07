import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Author(em: EntityManager): Action[] {
    return [
        {route: Schema.Accounts.Author.routes.getAll, action: async () => await new controllers.authorController(em).getAll()},
        {route: Schema.Accounts.Author.routes.getTotal, action: async () => await new controllers.authorController(em).getTotal()},
    ];
}
