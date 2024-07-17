import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, Icon, Image, MenuItem} from "semantic-ui-react";
import {Menu} from "../../types";

interface Props {
    menu: Menu;
    path: string;
}

export function MenuSubItem({menu, path}: Props) {
    return (
        <Fragment>
            {menu.image && (
                <Link to={path}>
                    <MenuItem>
                        <Image src={menu.image} verticalAlign="middle" width={20} height={20} />
                    </MenuItem>
                </Link>
            )}
            {(menu.name || menu.icon) && (
                <>
                    {menu.secondaryMenuItem && (
                        <Dropdown item text={menu.name} icon={menu.icon}>
                            <DropdownMenu>
                                {menu.secondaryMenuItem.map(secondary => {
                                    return (
                                        <Link to={secondary.path} key={secondary.path} >
                                            <DropdownItem style={{color: 'black'}}>
                                                        {secondary.icon && <Icon name={secondary.icon} />}
                                                        {secondary.name && <>{secondary.name}</>}
                                            </DropdownItem>
                                        </Link>
                                    );
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    )}
                    {!menu.secondaryMenuItem && (
                        <Link to={path}>
                            <MenuItem>
                                {menu.icon && <Icon name={menu.icon} />}
                                {menu.name && <>{menu.name}</>}
                            </MenuItem>
                        </Link>
                    )}
                </>
            )}
        </Fragment>
    );
}