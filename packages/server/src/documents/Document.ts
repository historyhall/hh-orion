import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function Document(em: EntityManager): Action[] {
    return [
        {route: Schema.Documents.Document.routes.getAll, action: async () => await new controllers.documentController(em).getAll()},
        {route: Schema.Documents.Document.routes.getById, action: async data => await new controllers.documentController(em).getById(data)},
        {route: Schema.Documents.Document.routes.getTotal, action: async () => await new controllers.documentController(em).getTotal()},
    ];
}
