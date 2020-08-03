import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RIDER } from '../../../services/queries/rider';

const AddRider = ({ closeNewRider }) => {
  const [addRider, { loading }] = useMutation(ADD_RIDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  const [account, setaccount] = useState({
    fname: '',
    lname: '',
    address: '',
    phone: '',
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setaccount({ ...account, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addRider({
      variables: {
        firstName: account.fname,
        lastName: account.lname,
        address: account.address,
        phone: account.phone,
      },
    })
      .then(() => {
        closeNewRider();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <div className="badge badge-primary p-2">
          <span style={{ color: '#fff', fontSize: 15 }}>Add new rider</span>
        </div>
        <hr />
        <form onSubmit={submitHandler}>
          <div className="row">
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
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="address"
              name="address"
              onChange={changeHandler}
              value={account.address}
            />
          </div>
          <div className="row">
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
          <div className="m-2 row">
            <div className="col">
              <button className="btn btn-success btn-block" type="submit">
                {loading ? (
                  <span>
                    <span
                      className="spinner-border spinner-border-sm mr-3"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>Creating account</span>
                  </span>
                ) : (
                  'Add Account'
                )}
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

export default AddRider;
