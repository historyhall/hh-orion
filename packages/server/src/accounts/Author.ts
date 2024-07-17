import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Schema} from "hh-orion-schema/dist";
import {Action} from "../types";

export function Author(em: EntityManager): Action[] {
    return [
        {
            route: Schema.accounts.author.getTotal.route,
            action: async (): Promise<Schema.accounts.author.getTotal.response> => await new controllers.authorController(em).getTotal()
        },
    ];
}
