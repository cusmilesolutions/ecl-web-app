import React, { useState } from 'react';
import Register from '../../components/Auth/Register';
import { useMutation } from '@apollo/client';
import { ADMIN_SIGN_UP } from '../../services/queries/auth';
import { withRouter } from 'react-router';

const RegisterPage = (props) => {
  const [admin, setadmin] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    employeeID: '',
    position: '',
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setadmin({ ...admin, [e.target.name]: value });
  };

  const [adminSignUp, { loading, error }] = useMutation(ADMIN_SIGN_UP, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // error handler not working for now
    adminSignUp({
      variables: {
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        password: admin.password,
        employeeID: admin.employeeID,
        position: admin.position,
      },
    })
      .then((res) => {
        // add a modal component to display success after registration
        return props.history.push('/login');
      })
      .catch((err) => console.error(err));
  };

  return (
    <Register
      errorMessage={error}
      loading={loading}
      submitHandler={submitHandler}
      changeHandler={changeHandler}
    />
  );
};

export default withRouter(RegisterPage);
