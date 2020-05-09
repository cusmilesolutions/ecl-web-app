import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import { routes } from './routes';

import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div
        style={{ backgroundColor: '#EEEEEE', height: '100vh' }}
        className="App"
      >
        <Navbar />
        <div className="container-fluid" style={{ paddingTop: 10 }}>
          {routes}
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default withRouter(App);
