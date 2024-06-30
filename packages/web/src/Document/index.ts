import {Page} from "../types";
import {Document} from "./Document";

const pages: Record<string, Page> = {
    document: {
        header: {
            name: 'Document',
            icon: 'file alternate'
        },
        path: '/document/:documentId',
        component: Document
    }
}
export default pages;