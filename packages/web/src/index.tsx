import debug from 'debug';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './About';
import Donate from './Contribute';
import Document from './Document';
import Home from './Home';
import {MainMenu} from './Layout';
import {Content} from './Layout/Content';
import Profile from './Profile';
import System from './System';
import {Page} from './types';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const d = debug('hh.web');
const pages: Record<string, Page> = {...Home, ...About, ...Document, ...Donate, ...Profile, ...System};

d('Start Web');

root.render(
	<StrictMode>
		<BrowserRouter>
			<MainMenu pages={pages} />
			<ToastContainer />
			<Routes>
				{Object.values(pages).map(page => {
					return <Route path={page.path} key={page.path} element={<Content main={page.component} sidebar={page?.sidebar} header={page.header} />} />;
				})}
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
