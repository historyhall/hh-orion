import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, DropdownItem, DropdownMenu, Icon} from 'semantic-ui-react';
import {Menu} from '../../types';

interface Props {
	menu: Menu;
	path: string;
}

export function MenuSubItemMobile({menu, path}: Props) {
	return (
		<Fragment>
			{(menu.name || menu.icon) && (
				<>
					{menu.secondaryMenuItem && (
						<Dropdown item text={menu.name} icon={menu.icon}>
							<DropdownMenu>
								{menu.secondaryMenuItem.map(secondary => {
									return (
										<Link to={secondary.path} key={secondary.path}>
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
							<DropdownItem style={{color: 'black'}}>
								{menu.icon && <Icon name={menu.icon} />}
								{menu.name && <>{menu.name}</>}
							</DropdownItem>
						</Link>
					)}
				</>
			)}
		</Fragment>
	);
}
