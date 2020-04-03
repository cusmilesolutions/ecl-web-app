import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AuthContextProvider from './contexts/AuthContext';
import OrdersContextProvider from './contexts/OrdersContext';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <OrdersContextProvider>
          <App />
        </OrdersContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
