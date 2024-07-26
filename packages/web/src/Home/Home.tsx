import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import {Introduction} from './home/Introduction';
import {Search} from './home/Search';
import {Statistics} from './home/Statistics';
import backgroundImage from './home/background.jpg';

export function Home() {
	return (
		<>
			<Grid style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '400px'}} verticalAlign="bottom">
				<GridRow>
					<GridColumn>
						<Introduction />
					</GridColumn>
				</GridRow>
				<GridRow>
					<GridColumn>
						<Search />
					</GridColumn>
				</GridRow>
			</Grid>
			<Grid>
				<GridRow>
					<GridColumn>
						<Statistics />
					</GridColumn>
				</GridRow>
			</Grid>
		</>
	);
}
