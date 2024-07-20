import {Link} from 'react-router-dom';
import {Header, List, ListContent, ListHeader, ListIcon, ListItem} from 'semantic-ui-react';

export function Support() {
	return (
		<div>
			<Header>Plans and Subscriptions</Header>
			<List>
				<ListItem>
					<ListIcon name="clipboard" size="large" verticalAlign="middle" />
					<ListContent>
						<Link to="/support/plans">
							<ListHeader as="a">What plans are available?</ListHeader>
						</Link>
					</ListContent>
				</ListItem>
			</List>
			<Header>Document Management</Header>
			<List>
				<ListItem>
					<ListIcon name="file alternate" size="large" verticalAlign="middle" />
					<ListContent>
						<Link to="/support/upload-documents">
							<ListHeader as="a">How do I upload documents?</ListHeader>
						</Link>
					</ListContent>
				</ListItem>
			</List>
		</div>
	);
}
