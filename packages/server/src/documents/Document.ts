import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import * as Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Document(em: EntityManager): Action[] {
    return [
        {
            route: Schema.documents.document.getAll.route,
            action: async () => await new controllers.documentController(em).getAll()
        },
        {
            route: Schema.documents.document.getById.route,
            action: async data => await new controllers.documentController(em).getById(data)
        },
        {
            route: Schema.documents.document.getTotal.route,
            action: async () => await new controllers.documentController(em).getTotal()
        },
    ];
}
