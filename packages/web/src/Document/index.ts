import {Page} from "../types";
import {Document} from "./Document";
import {DocumentSidebar} from "./DocumentSidebar";

const pages: Record<string, Page> = {
    document: {
        path: '/document/:documentId',
        component: Document,
        sidebar: DocumentSidebar,
    }
}
export default pages;