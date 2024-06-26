import {Icon, Image, MenuItem} from "semantic-ui-react";
import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Page} from "../types";

interface Props {
    page: Page;
}

export function MenuSubItem({page}: Props) {
    return <Fragment key={page.menu.path}>
        {page.menu.image && (
            <Link to={page.menu.path}>
                <MenuItem position={page.menu.position}><Image src={page.menu.image} verticalAlign="middle" width={20} height={20}/></MenuItem>
            </Link>
        )}
        {page.menu.name && (
            <Link to={page.menu.path}>
                <MenuItem color="yellow" position={page.menu.position}>
                    {page.menu.icon && <Icon name={page.menu.icon} />}
                    {page.menu.name}
                </MenuItem>
            </Link>
        )}
    </Fragment>;
}