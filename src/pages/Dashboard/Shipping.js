import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Shipping = () => {
  const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ? (
        <div className="container-fluid" style={{ backgroundColor: '#F7F7F7' }}>
          <div className="row">
            <div className="col-md-4">
              <div className="shadow-sm p-4 bg-white mt-3">
                <h5>Location</h5>
                <hr />
                <div style={{ height: 200 }} className="shadow-sm p-2">
                  <h5>Google Map Api Link</h5>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6 p-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm btn-block"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="col-md-6 p-2">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm btn-block"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="shadow-sm p-4 bg-white mt-3 mb-3">
                <h4>Shipping Details</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Customer Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="customerName"
                      />
                    </div>
                    <div className="form-group">
                      <label>Number of Items:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="itemNo"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone:</label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                      <label>Cost:</label>
                      <input type="text" className="form-control" id="cost" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="cusEmail"
                      />
                    </div>
                    <div className="form-group">
                      <label>Rider:</label>
                      <select className="form-control" id="riders">
                        <option>Select Rider</option>
                        <option>Rider 2</option>
                        <option>Rider 3</option>
                        <option>Load rider data from rider component</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h4 className="pt-5">Order Details</h4>
                <div className="row">
                  <div className="col-md-4">
                    <label>Date Booked:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="bookedDate"
                    ></input>
                    <label>Shipping Status:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="shipStatus"
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <label>Time Booked:</label>
                    <input
                      type="time"
                      className="form-control"
                      id="bookedTime"
                    ></input>
                    <label>Payment Type/Method:</label>
                    <select className="form-control" id="paymentMethod">
                      <option>Select Method</option>
                      <option>Mobile Money</option>
                      <option>Cash on Delivery</option>
                      <option>Add payment methods</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Payment Status:</label>
                    <select className="form-control" id="paymentStatus">
                      <option>Select Status</option>
                      <option>Rider 2</option>
                      <option>Rider 3</option>
                      <option>Add payment values</option>
                    </select>
                    <label>Payment Status:</label>
                    <input
                      type="range"
                      className="form-control-range"
                      id="statusRange"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <strong>
                      <label>Comment:</label>
                    </strong>
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Shipping;
