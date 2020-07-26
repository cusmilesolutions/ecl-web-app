import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import AllShippings from '../../components/Shipping/AllShippings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBan,
  faTruck,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import Shipped from '../../components/Shipping/Shipped';
import CancelledShippings from '../../components/Shipping/CancelledShippings';

const Shipping = () => {
  const { state } = useContext(AuthContext);
  const [activity, setactivity] = useState({ title: 'All Shippings' });

  const displayComponent = (e) => {
    let comp = e.target.id;
    switch (comp) {
      case 'all_shippings':
        setactivity({ title: 'All Shippings' });
        break;
      case 'shipped_orders':
        setactivity({ title: 'Shipped Orders' });
        break;
      case 'cancelled_shipping':
        setactivity({ title: 'Cancelled Shippings' });
        break;
      default:
        return <AllShippings />;
    }
  };
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="page_header rounded shadow-sm bg-secondary">
            <span>SHIPPING DETAILS</span>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="d-flex justify-content-start">
                <div
                  id="all_shippings"
                  onClick={displayComponent}
                  className="btn btn-info p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    id="all_shippings"
                    icon={faTruck}
                  />
                  <span id="all_shippings">All Shippings</span>
                </div>
                <div
                  id="shipped_orders"
                  onClick={displayComponent}
                  className="btn btn-success p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    id="shipped_orders"
                    icon={faCheckCircle}
                  />
                  <span id="shipped_orders">Shipped</span>
                </div>
                <div
                  id="cancelled_shipping"
                  onClick={displayComponent}
                  className="btn btn-danger p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    id="cancelled_shipping"
                    icon={faBan}
                  />
                  <span id="cancelled_shipping">Cancelled</span>
                </div>
              </div>
              <div className="shadow-sm p-4 bg-white">
                <span className="badge badge-primary p-2 mb-2">
                  {activity.title}
                </span>
                <div>
                  {activity.title === 'All Shippings' ? (
                    <AllShippings />
                  ) : activity.title === 'Shipped Orders' ? (
                    <Shipped />
                  ) : activity.title === 'Cancelled Shippings' ? (
                    <CancelledShippings />
                  ) : (
                    <AllShippings />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shadow-sm p-4 bg-white mb-3">
                <h5>
                  Shipping Details
                  <span> ID: 12345</span>
                </h5>
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
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Date Booked:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="bookedDate"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Shipping Status:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shipStatus"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Time Booked:</label>
                      <input
                        type="time"
                        className="form-control"
                        id="bookedTime"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Payment Method:</label>
                      <select className="form-control" id="paymentMethod">
                        <option>Select Method</option>
                        <option>Mobile Money</option>
                        <option>Cash on Delivery</option>
                        <option>Add payment methods</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Rider:</label>
                      <select className="form-control" id="paymentStatus">
                        <option selected defaultValue>
                          Select rider
                        </option>
                        <option>Rider 2</option>
                        <option>Rider 3</option>
                        <option>Add payment values</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Payment Status:</label>
                      <select className="form-control" id="paymentStatus">
                        <option>Select Status</option>
                        <option>Rider 2</option>
                        <option>Rider 3</option>
                        <option>Add payment values</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Comment:</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="comment"
                  ></textarea>
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
