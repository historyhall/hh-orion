import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";
import {schema} from "hh-orion-schema/dist";

export function Document(em: EntityManager): Action[] {
    return [
        {route: schema.documents.document.getAll.route, action: async () => await new controllers.documentController(em).getAll()},
        {route: schema.documents.document.getById.route, action: async data => await new controllers.documentController(em).getById(data)},
        {route: schema.documents.document.getTotal.route, action: async () => await new controllers.documentController(em).getTotal()},
        {route: schema.documents.document.getNameLike.route, action: async data => await new controllers.documentController(em).getNameLike(data)},
    ];
}
