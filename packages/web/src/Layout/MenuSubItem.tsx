import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Icon, Image, MenuItem} from "semantic-ui-react";
import {Menu} from "../types";

interface Props {
    menu: Menu;
    path: string;
}

export function MenuSubItem({menu, path}: Props) {
    return (
        <Fragment>
            {menu.image && (
                <Link to={path}>
                    <MenuItem position={menu.position}><Image src={menu.image} verticalAlign="middle" width={20} height={20} /></MenuItem>
                </Link>
            )}
            {(menu.name || menu.icon) && (
                <Link to={path}>
                    <MenuItem color="yellow" position={menu.position}>
                        {menu.icon && <Icon name={menu.icon} />}
                        {menu.name && <>{menu.name}</>}
                    </MenuItem>
                </Link>
            )}
        </Fragment>
    );
}