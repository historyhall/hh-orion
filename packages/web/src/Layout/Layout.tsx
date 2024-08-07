import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import About from '../About';
import Account from '../Account';
import Donate from '../Contribute';
import Document from '../Document';
import Explore from '../Explore';
import Home from '../Home';
import Support from '../Support';
import System from '../System';
import {isAuthorized} from '../isAuthorized';
import {Page} from '../types';
import {Content} from './layout/Content';
import {MainMenu} from './layout/MainMenu';

export function Layout() {
	const pages: Record<string, Page> = {...Home, ...Explore, ...About, ...Support, ...Document, ...Donate, ...System, ...Account};
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoggedIn(!!Cookies.get('hh_token'));
	}, [location]);

	const authorizedPages: Page[] = [];
	Object.values(pages).forEach(page => {
		if (isAuthorized(isLoggedIn, page.permissions)) {
			authorizedPages.push(page);
		}
	});

	return (
		<>
			<MainMenu pages={authorizedPages} />
			<ToastContainer pauseOnFocusLoss={false} theme="dark" position="bottom-right" />
			<Routes>
				{authorizedPages.map(page => {
					return <Route path={page.path} key={page.path} element={<Content main={page.component} sidebar={page?.sidebar} header={page.header} />} />;
				})}
			</Routes>
		</>
	);
}
