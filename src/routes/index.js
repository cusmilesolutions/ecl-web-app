import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Orders from '../pages/Orders';
import Accounts from '../pages/Accounts';
import RiderList from '../pages/Rider/RiderList';
import CustomerList from '../pages/Customer/CustomerList';
import PaymentPage from '../pages/Payment';

export let routes = (
  <Switch>
    <Route path="/" exact render={props => <Dashboard />} />
    <Route path="/login" exact render={props => <LoginPage />} />
    <Route path="/register" exact render={props => <RegisterPage />} />
    <Route path="/orders" exact render={props => <Orders />} />
    <Route path="/payments" exact render={props => <PaymentPage />} />
    <Route path="/accounts" exact render={props => <Accounts />} />
    <Route path="/accounts/riders" exact render={props => <RiderList />} />
    <Route
      path="/accounts/customers"
      exact
      render={props => <CustomerList />}
    />
    <Redirect to="/" />
  </Switch>
);
