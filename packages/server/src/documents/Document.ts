import {Action} from "../types";
import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";

export function Document(em: EntityManager): Action[] {
    return [
        {path: '/documents/get-all', action: async () => await new controllers.documentController(em).getAll()},
        {path: '/documents/get-by-id', action: async data => await new controllers.documentController(em).getById(data)},
        {path: '/documents/get-total', action: async () => await new controllers.documentController(em).getTotal()},
        {path: '/documents/get-like-name', action: async data => await new controllers.documentController(em).getNameLike(data)},
    ];
}
