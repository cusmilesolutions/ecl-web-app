import React, { useState } from 'react';
import Modal from 'react-modal';
import Rider from './Rider';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
};

const RiderList = () => {
  const riders = [
    {
      riderId: 'R001',
      fname: 'Issah',
      lname: 'Mohammed',
      gender: 'Male',
      address: 'House 2, Kasoa',
      dateJoined: '23/04/2019',
      numOfTrips: 27,
      totalRevenue: 1020
    },
    {
      riderId: 'R002',
      fname: 'James',
      lname: 'Hudson',
      gender: 'Male',
      address: 'House 2, Bawaleshie',
      dateJoined: '25/05/2019',
      numOfTrips: 49,
      totalRevenue: 3420
    },
    {
      riderId: 'R003',
      fname: 'Eric',
      lname: 'Osei',
      gender: 'Male',
      address: 'House 4, East Legon',
      dateJoined: '21/05/2019',
      numOfTrips: 19,
      totalRevenue: 3420
    }
  ];

  const [account, setaccount] = useState({
    riderId: '',
    fname: '',
    lname: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const changeHandler = e => {
    const value = e.target.value;
    setaccount({ ...account, [e.target.name]: value });
  };
  const submitHandler = e => {};

  const [newRider, setNewRider] = useState(false);
  const closeNewRider = () => setNewRider(false);
  const openNewRider = () => {
    setNewRider(true);
  };

  return (
    <div className="container-fluid">
      <div>
        <Modal
          isOpen={newRider}
          style={customStyles}
          onRequestClose={closeNewRider}
        >
          <div>
            <div>
              <div className="form_header">
                <div>
                  <h4>Add a Rider Account</h4>
                </div>
                <hr />
              </div>
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
                <div className="m-5">
                  <button className="btn btn-primary btn-block" type="submit">
                    Add Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
      <div className="row mt-2 mb-2 col-md-12">
        <div className="col-md-9">
          <h5>Number of Riders: {riders.length}</h5>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={openNewRider}>
            Add New Rider
          </button>
        </div>
      </div>
      <div className="d-flex">
        {riders.map(rider => (
          <Rider rider={rider} />
        ))}
      </div>
    </div>
  );
};

export default RiderList;
