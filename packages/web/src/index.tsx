import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import 'semantic-ui-css/semantic.min.css'
import {Page} from "./types";
import Home from "./Home";
import Donate from "./Donate";
import {MainMenu} from "./Layout";

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
        <MainMenu pages={pages} />
    </ApolloProvider>,
);
