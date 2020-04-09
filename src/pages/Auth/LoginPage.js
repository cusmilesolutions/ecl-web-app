import React, { useContext, useState } from 'react';
import Login from '../../components/Auth/Login';
import { AuthContext } from '../../contexts/AuthContext';
import { useMutation } from '@apollo/react-hooks';
import { ADMIN_LOGIN } from '../../components/Queries/auth';

const LoginPage = () => {
  const [admin, setadmin] = useState({ email: '', password: '' });
  const { setstate, autoLogout } = useContext(AuthContext);

  const changeHandler = (e) => {
    const value = e.target.value;
    setadmin({ ...admin, [e.target.name]: value });
  };

  const [adminLogin, { loading, error }] = useMutation(ADMIN_LOGIN, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });
  const submitHandler = (e) => {
    e.preventDefault();
    adminLogin({
      variables: { email: admin.email, password: admin.password },
    })
      .then((res) => {
        setstate({
          isAuth: true,
          token: res.data.login.token,
          userId: res.data.login.adminId,
        });
        localStorage.setItem('token', res.data.login.token);
        localStorage.setItem('userId', res.data.login.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        autoLogout(remainingMilliseconds);
      })
      .catch((err) => console.error(err));
  };
  return (
    <Login
      loading={loading}
      errorMessage={error}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default LoginPage;
