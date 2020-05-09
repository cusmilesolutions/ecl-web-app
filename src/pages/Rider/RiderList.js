import React, { useState } from 'react';

const RiderList = ({ closeNewRider }) => {
  const [account, setaccount] = useState({
    riderId: '',
    fname: '',
    lname: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const changeHandler = (e) => {
    const value = e.target.value;
    setaccount({ ...account, [e.target.name]: value });
  };
  const submitHandler = (e) => {};

  return (
    <div>
      <div>
        <div className="badge badge-primary p-2">
          <span style={{ color: '#fff', fontSize: 15 }}>Create new order</span>
        </div>
        <hr />
        <form onSubmit={submitHandler}>
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
              />
            </div>
          </div>
          <div className="row col-md-12">
            <div className="form-group col-md-6">
              <label>Employee ID</label>
              <input
                className="form-control"
                type="text"
                name="riderId"
                onChange={changeHandler}
                value={account.riderId}
              />
            </div>
            <div className="form-group col-md-6">
              <label>PIN</label>
              <input
                className="form-control"
                type="password"
                name="pin"
                onChange={changeHandler}
                value={account.pin}
              />
            </div>
          </div>
          <div className="row col-md-12">
            <div className="form-group col-md-6">
              <label>Address</label>
              <input
                className="form-control"
                type="address"
                name="address"
                onChange={changeHandler}
                value={account.address}
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
          <div className="m-2 row">
            <div className="col">
              <button className="btn btn-success btn-block" type="submit">
                Add Account
              </button>
            </div>
            <div className="col">
              <button
                onClick={closeNewRider}
                className="btn btn-danger btn-block"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RiderList;
