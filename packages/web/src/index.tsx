import debug from 'debug';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import About from './About';
import Donate from './Contribute';
import Document from './Document';
import Home from './Home';
import {MainMenu} from './Layout';
import {Content} from './Layout/Content';
import Profile from './Profile';
import System from './System';
import {Page} from './types';
import {isLoggedIn} from './isLoggedIn';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const d = debug('hh.web');
const pages: Record<string, Page> = {...Home, ...About, ...Document, ...Donate, ...Profile, ...System};

const authorizedPages: Page[] = [];
Object.values(pages).forEach(page => {
	if (page.permissions?.loggedIn && isLoggedIn()) {
		authorizedPages.push(page);
	} else if (page.permissions?.loggedOut && !isLoggedIn()) {
		authorizedPages.push(page);
	} else if (!page.permissions) {
		authorizedPages.push(page);
	}
});

d('Start Web');

root.render(
	<StrictMode>
		<BrowserRouter>
			<MainMenu pages={authorizedPages} />
			<ToastContainer pauseOnFocusLoss={false} theme="dark" position="bottom-right" />
			<Routes>
				{authorizedPages.map(page => {
					return <Route path={page.path} key={page.path} element={<Content main={page.component} sidebar={page?.sidebar} header={page.header} />} />;
				})}
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
