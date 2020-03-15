import React from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AuthContextProvider from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Dashboard />} />
      <Route path="/login" exact render={props => <LoginPage />} />
      <Route path="/register" exact render={props => <RegisterPage />} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <AuthContextProvider>
      <div className="App">{routes}</div>
    </AuthContextProvider>
  );
}

export default withRouter(App);
