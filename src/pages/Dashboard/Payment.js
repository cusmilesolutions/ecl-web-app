import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';

const Payments = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? <div></div> : <Redirect to="/login" />}{' '}
    </React.Fragment>
  );
};

export default Payments;
