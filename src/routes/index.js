import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import Orders from '../pages/Dashboard/Orders';
import Accounts from '../pages/Dashboard/Accounts';
import RiderList from '../pages/Rider/RiderList';
import CustomerList from '../pages/Customer/CustomerList';
import PaymentPage from '../pages/Dashboard/Payment';

export let routes = (
  <Switch>
    <Route path="/" exact render={(props) => <Dashboard {...props} />} />
    <Route path="/login" exact render={(props) => <LoginPage />} />
    <Route path="/register" exact render={(props) => <RegisterPage />} />
    <Route path="/orders" exact render={(props) => <Orders {...props} />} />
    <Route
      path="/payments"
      exact
      render={(props) => <PaymentPage {...props} />}
    />
    <Route path="/accounts" exact render={(props) => <Accounts {...props} />} />
    <Route
      path="/accounts/riders"
      exact
      render={(props) => <RiderList {...props} />}
    />
    <Route
      path="/accounts/customers"
      exact
      render={(props) => <CustomerList {...props} />}
    />
    <Redirect to="/login" />
  </Switch>
);
