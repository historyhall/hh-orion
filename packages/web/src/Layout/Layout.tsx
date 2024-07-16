import {MainMenu} from "./MainMenu";
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import {Content} from "./Content";
import {Page} from "../types";
import About from '../About';
import Donate from '../Contribute';
import Document from '../Document';
import Home from '../Home';
import Profile from '../Profile';
import System from '../System';
import {isAuthorized} from '../isAuthorized';

export function Layout() {
    const pages: Record<string, Page> = {...Home, ...About, ...Document, ...Donate, ...Profile, ...System};

    const authorizedPages: Page[] = [];
    Object.values(pages).forEach(page => {
        if (isAuthorized(page.permissions)) {
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
    )
}