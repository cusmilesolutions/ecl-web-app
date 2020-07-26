import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../pages/App/Dashboard';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import Orders from '../pages/App/Orders';
import Accounts from '../pages/App/Accounts';
import PaymentPage from '../pages/App/Payment';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import Reports from '../pages/App/Reports';
import Shipping from '../pages/App/Shipping';
import OrdersContextProvider from '../contexts/OrdersContext';

const AppNavigation = () => {
  return (
    <Switch>
      <Route path="/login" exact render={(props) => <LoginPage />} />
      <Route path="/register" exact render={(props) => <RegisterPage />} />
      <Route
        path="/reset-password"
        exact
        render={(props) => <ResetPasswordPage />}
      />
      <OrdersContextProvider>
        <Route path="/" exact render={(props) => <Dashboard {...props} />} />
        <Route path="/orders" exact render={(props) => <Orders {...props} />} />
        <Route
          path="/payments"
          exact
          render={(props) => <PaymentPage {...props} />}
        />
        <Route
          path="/accounts"
          exact
          render={(props) => <Accounts {...props} />}
        />
        <Route
          path="/reports"
          exact
          render={(props) => <Reports {...props} />}
        />
        <Route
          path="/shipping"
          exact
          render={(props) => <Shipping {...props} />}
        />
      </OrdersContextProvider>
    </Switch>
  );
};
export default AppNavigation;
