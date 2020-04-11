import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const ResetPassword = ({
  changeHandler,
  submitHandler,
  loading,
  errorMessage,
}) => {
  const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ? <Redirect to="/" /> : null}
      <div
        style={{ minWidth: 300, maxWidth: 480 }}
        className="shadow mx-auto mt-3 mb-3 bg-white p-5"
      >
        <div>
          <div className="form_header">
            <div>
              <h4>Request for password reset</h4>
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
              <label>Position</label>
              <input
                className="form-control"
                type="text"
                name="positon"
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label>Employee ID</label>
              <input
                className="form-control"
                type="text"
                name="employeeID"
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
                    <span>Sending Request</span>
                  </span>
                ) : (
                  'Reset Password'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
