import React, { useState } from 'react';
import ResetPassword from '../../components/Auth/ResetPassword';
import { useMutation } from '@apollo/react-hooks';
import { ADMIN_PWD_RESET } from '../../components/Queries/auth';

const ResetPasswordPage = () => {
  const [reset, setreset] = useState({
    email: '',
    position: '',
    employeeID: '',
    newPassword: '',
  });
  const changeHandler = (e) => {
    const value = e.target.value;
    setreset({ ...reset, [e.target.name]: value });
  };
  const [adminPwdReset, { loading, error, data }] = useMutation(
    ADMIN_PWD_RESET,
    {
      errorPolicy: 'all',
      onError: (error) => console.log(error.graphQLErrors[0].message),
    }
  );
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ResetPassword
      errorMessage={error}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      loading={loading}
    />
  );
};

export default ResetPasswordPage;
