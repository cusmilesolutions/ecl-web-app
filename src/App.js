import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import { routes } from './routes';

import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </AuthContextProvider>
  );
}

export default withRouter(App);
