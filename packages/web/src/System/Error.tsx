import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react';

export function Error() {
	return (
		<Grid stackable container>
			<GridRow columns={1}>
				<GridColumn>
					<Header content="404 Error" icon="warning circle" />
				</GridColumn>
			</GridRow>
			<GridRow columns={1}>
				<GridColumn>
					<p>The page you are looking for does not exist.</p>
					<p>Use the menu at the top of the page to start heading in the right direction.</p>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
