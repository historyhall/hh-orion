import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Document(em: EntityManager): Action[] {
    return [
        {route: Schema.documents.document.routes.getAll, action: async () => await new controllers.documentController(em).getAll()},
        {route: Schema.documents.document.routes.getById, action: async data => await new controllers.documentController(em).getById(data)},
        {route: Schema.documents.document.routes.getTotal, action: async () => await new controllers.documentController(em).getTotal()},
    ];
}
