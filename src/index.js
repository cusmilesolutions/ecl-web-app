import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/fonts/Muli-VariableFont_wght.ttf';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const cache = new InMemoryCache({});

const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://localhost:5000/graphql',
    uri: 'https://ecl-api.herokuapp.com/graphql',
    headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
  }),
  cache,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
serviceWorker.unregister();
