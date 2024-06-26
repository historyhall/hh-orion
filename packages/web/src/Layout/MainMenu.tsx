import {Page} from "../types";
import {Menu, MenuMenu} from "semantic-ui-react";
import {Fragment} from "react";
import {MenuSubItem} from "./MenuSubItem";

interface Props {
    pages: Page[]
}
export function MainMenu({pages}: Props) {
    const leftMenuItems = pages.filter(page => page.menu.position === 'left' || page.menu.position === undefined);
    const rightMenuItems = pages.filter(page => page.menu.position === 'right');
    return (
        <Fragment>
            <Menu attached inverted>{leftMenuItems.map(page => {
                return <MenuSubItem page={page} />;
            })}
            {rightMenuItems.length > 0} {
                <MenuMenu position="right">
                    {rightMenuItems.map(page => {
                        return <MenuSubItem page={page} />;
                    })}
                </MenuMenu>
            }
            </Menu>
        </Fragment>
    );
}