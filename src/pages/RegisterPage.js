import React from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Auth/Register';

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
