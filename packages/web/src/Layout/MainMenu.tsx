import {Page} from "../types";
import {Menu, MenuItem} from "semantic-ui-react";

interface Props {
    pages: Page[]
}
export function MainMenu({pages}: Props) {
    return <Menu inverted attached>{pages.map(page => <MenuItem>{page.menu.name}</MenuItem>)}</Menu>;
}