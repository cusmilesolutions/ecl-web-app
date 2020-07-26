import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import Riders from '../../components/Accounts/Rider/Riders';
import Customers from '../../components/Accounts/Customer/Customers';

const Accounts = () => {
  const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="page_header bg-secondary rounded shadow-sm">
            <span>ACCOUNTS</span>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <Riders />
            </div>
            <div className="col-md-6">
              <Customers />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Accounts;
