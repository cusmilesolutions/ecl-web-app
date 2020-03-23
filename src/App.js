import React from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AuthContextProvider from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Orders from './pages/Orders';
import Accounts from './pages/Accounts';
import RiderList from './pages/Rider/RiderList';
import CustomerList from './pages/Customer/CustomerList';
import OrdersContextProvider from './contexts/OrdersContext';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Dashboard />} />
      <Route path="/login" exact render={props => <LoginPage />} />
      <Route path="/register" exact render={props => <RegisterPage />} />
      <Route path="/orders" exact render={props => <Orders />} />
      <Route path="/payments" exact render={props => <RegisterPage />} />
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
  return (
    <AuthContextProvider>
      <OrdersContextProvider>
        <div className="App">
          <Navbar />
          {routes}
        </div>
      </OrdersContextProvider>
    </AuthContextProvider>
  );
}

export default withRouter(App);
