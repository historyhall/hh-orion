import {Dropdown, DropdownMenu, Image, Menu, MenuItem, MenuMenu} from 'semantic-ui-react';
import {Page} from '../../types';
import {MenuSubItem} from './MenuSubItem';
import {useIsMobile} from '../../useIsMobile';
import {MenuSubItemMobile} from './MenuSubItemMobile';
import {Link} from 'react-router-dom';
import logo from './logo.png';

interface Props {
	pages: Page[];
}

export function MainMenu({pages}: Props) {
	const isMobile = useIsMobile();
	const leftMenuItems = pages.filter(page => page.menu?.position === 'left' || page.menu?.position === undefined);
	const rightMenuItems = pages.filter(page => page.menu?.position === 'right');

	if (isMobile) {
	}

	return (
		<Menu attached inverted>
			<Link to="/">
				<MenuItem>
					<Image src={logo} verticalAlign="middle" width={20} height={20} />
				</MenuItem>
			</Link>
			{isMobile && (
				<Dropdown item icon="bars" simple>
					<DropdownMenu>
						{leftMenuItems.map(page => {
							if (page.menu) {
								return <MenuSubItemMobile menu={page.menu} path={page.path} key={page.path} />;
							}
							return null;
						})}
					</DropdownMenu>
				</Dropdown>
			)}
			{!isMobile &&
				leftMenuItems.map(page => {
					if (page.menu) {
						return <MenuSubItem menu={page.menu} path={page.path} key={page.path} />;
					}
					return null;
				})}
			{rightMenuItems.length > 0 && (
				<MenuMenu position="right">
					{rightMenuItems.map(page => {
						if (page.menu) {
							return <MenuSubItem menu={page.menu} path={page.path} key={page.path} />;
						}
						return null;
					})}
				</MenuMenu>
			)}
		</Menu>
	);
}
