import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";
import {schema} from "hh-orion-schema/dist";

export function Author(em: EntityManager): Action[] {
    return [
        {route: schema.accounts.author.getAll.route, action: async () => await new controllers.authorController(em).getAll()},
        {route: schema.accounts.author.getTotal.route, action: async () => await new controllers.authorController(em).getTotal()},
    ];
}
