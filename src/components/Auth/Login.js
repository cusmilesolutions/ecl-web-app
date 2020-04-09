import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Login = ({ changeHandler, submitHandler, loading, errorMessage }) => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? <Redirect to="/" /> : <Redirect to="/login" />}
      <div className="shadow w-50 mx-auto mt-5 bg-white p-5">
        <div>
          <div className="form_header">
            <div>
              <h4>Log in as Administrator</h4>
            </div>
            <div className="text-center text-danger">
              {errorMessage ? errorMessage.graphQLErrors[0].message : null}
            </div>
            <hr />
          </div>
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={changeHandler}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={changeHandler}
              />
            </div>

            <div className="m-5">
              <button className="btn btn-primary btn-block" type="submit">
                {loading ? (
                  <span>
                    <span
                      className="spinner-border spinner-border-sm mr-3"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>Logging into account</span>
                  </span>
                ) : (
                  'Login'
                )}
              </button>
            </div>
            <div className="row col-md-12">
              <p className="text-center col-md-6">
                <Link to="/reset-password">Request for new password</Link>
              </p>
              <p className="text-center col-md-6">
                <Link
                  className="p-3 border border-primary rounded-pill"
                  to="/register"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
