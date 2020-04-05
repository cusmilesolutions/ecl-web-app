import React, { useContext } from 'react';
import Login from '../../components/Auth/Login';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {
  const { admin, setadmin } = useContext(AuthContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setadmin({ ...admin, [e.target.name]: value });
  };
  const submitHandler = (e) => {};
  return <Login changeHandler={changeHandler} submitHandler={submitHandler} />;
};

export default LoginPage;
