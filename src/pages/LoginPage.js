import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Auth/Login';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const { state, setstate, autoLogout, admin, setadmin } = useContext(
    AuthContext
  );
  const changeHandler = e => {
    const value = e.target.value;
    setadmin({ ...admin, [e.target.name]: value });
  };
  const submitHandler = e => {};
  return (
    <div>
      <Navbar />
      <div>
        <Login changeHandler={changeHandler} submitHandler={submitHandler} />
      </div>
    </div>
  );
};

export default LoginPage;
