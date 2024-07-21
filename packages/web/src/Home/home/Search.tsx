import {Grid, GridColumn, GridRow, Header} from 'semantic-ui-react';
import {Searchbar} from '../../System/search/Searchbar';

export function Search() {
	return (
		<Grid stackable container>
			<GridRow columns={1}>
				<GridColumn>
					<Header content="Search our Collection" color="yellow" size="huge" />
				</GridColumn>
			</GridRow>
			<GridRow columns={1}>
				<GridColumn>
					<Searchbar />
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
