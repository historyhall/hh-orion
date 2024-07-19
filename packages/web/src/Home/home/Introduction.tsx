import {Grid, GridColumn, GridRow, Header} from 'semantic-ui-react';

export function Introduction() {
	return (
		<Grid stackable container>
			<GridRow columns={1}>
				<GridColumn>
					<Header content="Welcome to History Hall" />
				</GridColumn>
			</GridRow>
			<GridRow columns={1}>
				<GridColumn>
					<p>We are an advanced research database and virtual museum. Start searching below to explore our virtual halls.</p>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
