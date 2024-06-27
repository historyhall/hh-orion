import debug from 'debug';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import About from './About';
import Donate from './Contribute';
import Home from './Home';
import {MainMenu} from './Layout';
import Profile from './Profile';
import {Page} from './types';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const d = debug('hh.web');
const pages: Page[] = [Home, About, Donate, Profile];

d('Start Web');

root.render(
	<StrictMode>
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
	</StrictMode>,
);
