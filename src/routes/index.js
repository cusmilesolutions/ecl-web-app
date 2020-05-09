import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import Orders from '../pages/Dashboard/Orders';
import Accounts from '../pages/Dashboard/Accounts';
import PaymentPage from '../pages/Dashboard/Payment';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import Reports from '../pages/Dashboard/Reports';
import Shipping from '../pages/Dashboard/Shipping';

export let routes = (
  <Switch>
    <Route path="/" exact render={(props) => <Dashboard {...props} />} />
    <Route path="/login" exact render={(props) => <LoginPage />} />
    <Route path="/register" exact render={(props) => <RegisterPage />} />
    <Route
      path="/reset-password"
      exact
      render={(props) => <ResetPasswordPage />}
    />
    <Route path="/orders" exact render={(props) => <Orders {...props} />} />
    <Route
      path="/payments"
      exact
      render={(props) => <PaymentPage {...props} />}
    />
    <Route path="/accounts" exact render={(props) => <Accounts {...props} />} />
    <Route path="/reports" exact render={(props) => <Reports {...props} />} />
    <Route path="/shipping" exact render={(props) => <Shipping {...props} />} />
    <Redirect to="/login" />
  </Switch>
);
