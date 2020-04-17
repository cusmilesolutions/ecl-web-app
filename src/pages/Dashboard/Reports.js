import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExport,
  faFilePdf,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/react-hooks';
import {
  GET_CANCELLED_ORDERS,
  GET_NEW_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
} from '../../components/Queries/order';
import { pdf } from '../../constants/PrintToPDF';
import NewOrdersReport from '../../components/Reports/NewOrdersReport';
import ApprovedOrdersReport from '../../components/Reports/ApprovedOrdersReport';
import CancelledOrdersReport from '../../components/Reports/CancelledOrdersReport';
import DeliveredOrdersReport from '../../components/Reports/DeliveredOrdersReport';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Reports = () => {
  const { data: newOrdersData } = useQuery(GET_NEW_ORDERS);
  const { data: cancelledOrdersData } = useQuery(GET_CANCELLED_ORDERS);
  const { data: deliveredOrdersData } = useQuery(GET_DELIVERED_ORDERS);
  const { data: ordersOnDeliveryData } = useQuery(GET_ON_DELIVERY_ORDERS);
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
      data = newOrdersData;
    } else if (orderType === 'Approved Orders') {
      data = ordersOnDeliveryData;
    } else if (orderType === 'Cancelled Orders') {
      data = cancelledOrdersData;
    } else if (orderType === 'Delivered Orders') {
      data = deliveredOrdersData;
      return data;
    }
  };

  const printReport = () => {
    generateData(report.orderType);
    pdf('#preview');
  };

  const date = new Date().toUTCString();
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div className="row col-md-12">
          <div className="col-md-5">
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
                    onChange={changeHandler}
                    className="form-control"
                    name="type"
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
                      name="dateFrom"
                      // required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Date To</label>
                    <input
                      onChange={changeHandler}
                      type="date"
                      className="form-control"
                      name="dateTo"
                    />
                  </div>
                </div>
                {report.type === 'Orders' ? (
                  <div className="form-group">
                    <label>Select Order type</label>
                    <select
                      onChange={changeHandler}
                      defaultValue="Select one"
                      className="form-control"
                      name="orderType"
                      required
                    >
                      <option disabled value="Select one">
                        Select one
                      </option>
                      <option value="New Orders">New Orders</option>
                      <option value="Approved Orders">Approved Orders</option>
                      <option value="Delivered Orders">Delivered Orders</option>
                      <option value="Cancelled Orders">Cancelled Orders</option>
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
                  <div className="col-md-4 p-2">
                      <ReactHTMLTableToExcel table="preview" filename={`${date}`} sheet="sheet" buttonText="Export" className="btn btn-outline-success btn-block rounded-pill" />
                  </div>
                  <div className="col-md-4 p-2">
                    <button
                      className="btn btn-outline-danger btn-block rounded-pill"
                      onClick={printReport}
                    >
                      <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                      <span>Print</span>
                    </button>
                  </div>
                  <div className="col-md-4 p-2">
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
          </div>
          <div className="col-md-7">
            <div className="m-3">
              <h4>Preview</h4>
              <hr />
            </div>
            <div>
              {report.orderType === 'New Orders' ? (
                <NewOrdersReport newOrdersData={newOrdersData} />
              ) : report.orderType === 'Approved Orders' ? (
                <ApprovedOrdersReport ordersOnDelivery={ordersOnDeliveryData} />
              ) : report.orderType === 'Cancelled Orders' ? (
                <CancelledOrdersReport cancelledOrders={cancelledOrdersData} />
              ) : report.orderType === 'Delivered Orders' ? (
                <DeliveredOrdersReport deliveredOrders={deliveredOrdersData} />
              ) : null}
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
