import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {pages as About} from '../About';
import {pages as Account} from '../Account';
import {pages as Donate} from '../Contribute';
import {pages as Document} from '../Document';
import {pages as Explore} from '../Explore';
import {pages as Home} from '../Home';
import {pages as Support} from '../Support';
import {pages as System} from '../System';
import {isAuthorized} from '../lib/isAuthorized';
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
