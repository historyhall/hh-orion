import {Header, List, ListContent, ListHeader, ListIcon, ListItem} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export function Support() {
	return (
		<>
			<Header>Plans and Subscriptions</Header>
			<List divided relaxed>
				<ListItem>
					<ListIcon name="clipboard list" size="large" verticalAlign="middle" />
					<ListContent>
						<Link to="/support/plans">
							<ListHeader as="a">What plans are available?</ListHeader>
						</Link>
					</ListContent>
				</ListItem>
			</List>
		</>
	);
}
