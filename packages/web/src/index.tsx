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
import debug from 'debug';
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const d = debug('hh.test');

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.REACT_APP_API_URL || 'https://api.historyhall.org/api',
	}),
	cache: new InMemoryCache(),
	defaultOptions: {query: {fetchPolicy: 'no-cache'}},
});

const pages: Page[] = [Home, About, Donate, Profile];

d('Start Web');

root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<MainMenu pages={pages} />
			<Routes>
				{pages.map(page => {
					return (
						<Route
							path={page.path}
							key={page.path}
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
