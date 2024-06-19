import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import 'semantic-ui-css/semantic.min.css';
import {Page} from './types';
import Home from './Home';
import Donate from './Contribute';
import {MainMenu} from './Layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.REACT_APP_API_URL,
	}),
	cache: new InMemoryCache(),
	defaultOptions: {query: {fetchPolicy: 'no-cache'}},
});

const pages: Page[] = [Home, About, Donate];

root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<MainMenu pages={pages} />
			<Routes>
				{pages.map(page => {
					return (
						<Route
							path={page.menu.path}
							key={page.menu.path}
							element={
								<Grid padded stackable divided>
									<GridRow>
										<GridColumn width={14}>
											<page.component />
										</GridColumn>
										<GridColumn width={2}>Sidebar</GridColumn>
									</GridRow>
								</Grid>
							}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	</ApolloProvider>,
);
