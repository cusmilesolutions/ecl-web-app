import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Shipping = () => {
  const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ? <div>Shipping</div> : <Redirect to="/login" />}
    </React.Fragment>
  );
};

export default Shipping;
