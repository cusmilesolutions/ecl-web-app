import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
  const { state } = useContext(AuthContext);
  const [account, setaccount] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const changeHandler = e => {
    const value = e.target.value;
    setaccount({ ...account, [e.target.name]: value });
  };
  const submitHandler = e => {};
  return (
    <React.Fragment>
      {state.isAuth ? <Redirect to="/" /> : null}
      <div className="shadow w-75 mx-auto mt-5 bg-white p-5">
        <div>
          <div className="form_header">
            <div>
              <h4>Create an admin account</h4>
            </div>
            <hr />
          </div>
          <form method="post" onSubmit={submitHandler}>
            <div className="row col-md-12">
              <div className="form-group col-md-6">
                <label>First name</label>
                <input
                  className="form-control"
                  type="text"
                  name="fname"
                  onChange={changeHandler}
                  value={account.fname}
                  autoFocus
                />
              </div>
              <div className="form-group col-md-6">
                <label>Last name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lname"
                  onChange={changeHandler}
                  value={account.lname}
                  autoFocus
                />
              </div>
            </div>
            <div className="row col-md-12">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  value={account.email}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Phone</label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  onChange={changeHandler}
                  value={account.phone}
                />
              </div>
            </div>
            <div className="row col-md-12">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={account.password}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  onChange={changeHandler}
                  value={account.confirmPassword}
                />
              </div>
            </div>
            <div className="m-5">
              <button className="btn btn-primary btn-block" type="submit">
                Create an account
              </button>
            </div>
            <p className="text-center">
              <Link to="/login">Log into admin account</Link>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
