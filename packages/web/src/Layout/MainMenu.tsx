import {Fragment} from "react";
import {Menu, MenuMenu} from "semantic-ui-react";
import {Page} from "../types";
import {MenuSubItem} from "./MenuSubItem";

interface Props {
    pages: Page[]
}
export function MainMenu({pages}: Props) {
    const leftMenuItems = pages.filter(page => page.menu?.position === 'left' || page.menu?.position === undefined);
    const rightMenuItems = pages.filter(page => page.menu?.position === 'right');
    return (
        <Fragment>
            <Menu attached inverted>{leftMenuItems.map(page => {
                if (page.menu) {
                    return <MenuSubItem menu={page.menu} path={page.path} />;
                }
                return null;
            })}
            {rightMenuItems.length > 0} {
                <MenuMenu position="right">
                    {rightMenuItems.map(page => {
                        if (page.menu) {
                            return <MenuSubItem menu={page.menu} path={page.path} />;
                        }
                        return null;
                    })}
                </MenuMenu>
            }
            </Menu>
        </Fragment>
    );
}