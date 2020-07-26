import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/global/Navbar';

import AppNavigation from './routes';

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
          <AppNavigation />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default withRouter(App);
