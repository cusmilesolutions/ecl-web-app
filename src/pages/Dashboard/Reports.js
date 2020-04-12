import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExport,
  faFilePdf,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  GET_CANCELLED_ORDERS,
  GET_NEW_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
} from '../../components/Queries/order';
import { pdf } from '../../constants/PrintToPDF';

const Reports = () => {
  const [getNewOrders, { data: newOrdersData }] = useLazyQuery(GET_NEW_ORDERS);
  const [getCancelled, { data: cancelledOrdersData }] = useLazyQuery(
    GET_CANCELLED_ORDERS
  );
  const [getDelivered, { data: deliveredOrdersData }] = useLazyQuery(
    GET_DELIVERED_ORDERS
  );
  const [getOnDelivery, { data: ordersOnDeliveryData }] = useLazyQuery(
    GET_ON_DELIVERY_ORDERS
  );
  const { state } = useContext(AuthContext);
  const [report, setreport] = useState({
    type: '',
    orderType: '',
    dateFrom: null,
    dateTo: null,
  });
  const changeHandler = (e) => {
    const value = e.target.value;
    setreport({ ...report, [e.target.name]: value });
  };
  const generateData = (orderType) => {
    let data;
    if (orderType === 'New Orders') {
      console.log(newOrdersData);
      return getNewOrders();
      // data = newOrdersData;
    } else if (orderType === 'Approved Orders') {
      data = ordersOnDeliveryData;
    } else if (orderType === 'Cancelled Orders') {
      data = cancelledOrdersData;
    } else if (orderType === 'Delivered Orders') {
      data = deliveredOrdersData;
    }
    return data;
  };

  const printReport = () => {
    console.log(report);
    console.log(generateData(report.orderType));
    // pdf(generateData);
  };

  return (
    <React.Fragment>
      {state.isAuth ? (
        <div
          style={{ minWidth: 300, maxWidth: 500 }}
          className="shadow mx-auto mt-5 bg-white p-4"
        >
          <div>
            <h4>Reports</h4>
          </div>
          <hr />
          <div>
            <div className="form-group">
              <label>Report Type</label>
              <select
                onChange={(e) => setreport({ type: e.target.value })}
                className="form-control"
                defaultValue="Select one"
                required
              >
                <option disabled value="Select one">
                  Select one
                </option>
                <option value="Orders">Orders</option>
                <option value="Shipping">Shipping</option>
                <option value="Customers">Customers</option>
                <option value="Payment">Payment</option>
              </select>
            </div>
            <div className="row col-md-12">
              <div className="form-group col-md-6">
                <label>Date From</label>
                <input
                  onChange={changeHandler}
                  type="date"
                  className="form-control"
                  // required
                />
              </div>
              <div className="form-group col-md-6">
                <label>Date To</label>
                <input
                  onChange={changeHandler}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            {report.type === 'Orders' ? (
              <div className="form-group">
                <label>Select Order type</label>
                <select
                  onChange={(e) => setreport({ orderType: e.target.value })}
                  defaultValue="Select one"
                  className="form-control"
                  required
                >
                  <option disabled value="Select one">
                    Select one
                  </option>
                  <option>New Orders</option>
                  <option>Approved Orders</option>
                  <option>Delivered</option>
                </select>
              </div>
            ) : null}
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={changeHandler}
                // required
              />
            </div>
            <div className="row col-md-12 mt-3">
              <div className="col-md-4">
                <button
                  className="btn btn-outline-success btn-block rounded-pill"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faFileExport} className="mr-2" />
                  <span>Export</span>
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-danger btn-block rounded-pill"
                  onClick={printReport}
                >
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  <span>Print</span>
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-secondary btn-block rounded-pill"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <span>Email</span>
                </button>
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

export default Reports;
