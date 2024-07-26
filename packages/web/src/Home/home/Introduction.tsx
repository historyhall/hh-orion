import {Grid, GridColumn, GridRow, Header} from 'semantic-ui-react';

export function Introduction() {
	return (
		<Grid stackable container>
			<GridRow columns={1}>
				<GridColumn>
					<Header content="Welcome to History Hall" color="yellow" size="huge" />
				</GridColumn>
			</GridRow>
			<GridRow columns={1}>
				<GridColumn>
					<strong style={{color: 'white', fontSize: '18px'}}>
						Explore our advanced research platform, designed for Historians, Professors, and Archaeologist.
					</strong>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
