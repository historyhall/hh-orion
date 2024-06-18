import {Page} from "../types";
import {Menu, MenuItem} from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Props {
    pages: Page[]
}
export function MainMenu({pages}: Props) {
    return (<Menu inverted attached>{pages.map(page => {
        return <Link to={page.menu.path}><MenuItem>{page.menu.name}</MenuItem></Link>;
    })}
    </Menu>);
}