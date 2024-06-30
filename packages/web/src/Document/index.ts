import {Page} from "../types";
import {Document} from "./Document";

const pages: Record<string, Page> = {
    document: {
        path: '/document/:documentId',
        component: Document
    }
}
export default pages;