import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:5001/api/',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {query: {fetchPolicy: 'no-cache'}}
});

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);
