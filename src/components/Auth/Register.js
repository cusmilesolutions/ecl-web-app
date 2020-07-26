import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = ({ submitHandler, changeHandler, errorMessage, loading }) => {
  const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ? <Redirect to="/" /> : null}
      <div
        style={{ minWidth: 300, maxWidth: 650 }}
        className="shadow mx-auto mt-4 mb-4 bg-white p-5"
      >
        <div>
          <div className="form_header">
            <div>
              <h4>Create an admin account</h4>
            </div>
            <div className="text-center text-danger">
              {errorMessage ? errorMessage.graphQLErrors[0].message : null}
            </div>
            <hr />
          </div>
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="form-group col-md-6">
                <label>First name</label>
                <input
                  className="form-control"
                  type="text"
                  name="fname"
                  onChange={changeHandler}
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
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Phone</label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="m-3">
              <button className="btn btn-primary btn-block" type="submit">
                {loading ? (
                  <span>
                    <span
                      className="spinner-border spinner-border-sm mr-3"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>Creating an account</span>
                  </span>
                ) : (
                  'Create an account'
                )}
              </button>
            </div>
            <div className="mt-2">
              <p className="text-center">
                <Link
                  className="p-2 border border-primary rounded-pill"
                  to="/login"
                >
                  Log into admin account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
