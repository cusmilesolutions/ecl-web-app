import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [admin, setadmin] = useState({ email: '', password: '' });
  const [state, setstate] = useState({
    isAuth: true,
    token: null,
    userId: null
  });

  // built in authentication using jwt
  const logout = () => {
    setstate({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryToken');
    localStorage.removeItem('userId');
  };

  const autoLogout = ms => {
    setTimeout(() => {
      logout();
    }, ms);
  };

  useEffect(() => {
    const autoLogout = ms => {
      setTimeout(() => {
        logout();
      }, ms);
    };
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logout();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setstate({ isAuth: true, token: token, userId: userId });
    autoLogout(remainingMilliseconds);
  }, []);
  return (
    <AuthContext.Provider
      value={{ state, setstate, admin, setadmin, logout, autoLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
