import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Author(em: EntityManager): Action[] {
    console.log('fdsdfs', Schema);
    return [
        {route: Schema.accounts.author.getAll.route, action: async () => await new controllers.authorController(em).getAll()},
        {route: Schema.accounts.author.getTotal.route, action: async () => await new controllers.authorController(em).getTotal()},
    ];
}
