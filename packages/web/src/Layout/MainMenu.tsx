import {Page} from "../types";
import {Icon, Image, Menu, MenuItem} from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Props {
    pages: Page[]
}
export function MainMenu({pages}: Props) {
    return (<Menu attached inverted>{pages.map(page => {
        if(page.menu.image) {
            return <>
                <Link to={page.menu.path} key={page.menu.path}>
                    <MenuItem><Image src={page.menu.image} verticalAlign="middle" width={20} height={20}/></MenuItem>
                </Link>
                <Link to={page.menu.path} key={page.menu.path}>
                    <MenuItem color="yellow"><Icon name={page.menu.icon} />{page.menu.name}</MenuItem>
                </Link>
            </>
        }
        if(page.menu.icon) {
            return <Link to={page.menu.path} key={page.menu.path}><MenuItem><Icon name={page.menu.icon}/>{page.menu.name}</MenuItem></Link>;
        }
        return <Link to={page.menu.path} key={page.menu.path}><MenuItem>{page.menu.name}</MenuItem></Link>;
    })}
    </Menu>);
}