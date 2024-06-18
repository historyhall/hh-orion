import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import 'semantic-ui-css/semantic.min.css'
import {Page} from "./types";
import Home from "./Home";
import Donate from "./Donate";
import {MainMenu} from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.REACT_APP_API_URL,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {query: {fetchPolicy: 'no-cache'}}
});

const pages: Page[] = [Home, Donate];

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <MainMenu pages={pages} />
            <Routes>
            {pages.map(page => {
                return <Route path={page.menu.path} element={<page.component />} />
            })}
            </Routes>
        </BrowserRouter>
    </ApolloProvider>,
);
