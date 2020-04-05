import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Login = ({ changeHandler, submitHandler }) => {
  const { state, admin } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? <Redirect to="/" /> : <Redirect to="/login" />}
      <div className="shadow w-50 mx-auto mt-5 bg-white p-5">
        <div>
          <div className="form_header">
            <div>
              <h4>Log in as Administrator</h4>
            </div>
            <hr />
          </div>
          <form method="post" onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email</label>
              <input
                className=""
                type="email"
                name="email"
                onChange={changeHandler}
                value={admin.email}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className=""
                type="password"
                name="password"
                onChange={changeHandler}
                value={admin.password}
              />
            </div>
            <div className="m-5">
              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </div>
            <p className="text-center">
              <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
