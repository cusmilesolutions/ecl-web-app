import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import {
  GET_CANCELLED_ORDERS,
  GET_NEW_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
  GET_ALL_ORDERS,
  GET_ALL_PAYMENT,
  GET_PENDING_PAYMENT,
  GET_RECEIVED_PAYMENT,
  GET_ALL_SHIPPINGS,
} from '../../services/queries/order';
import { pdf } from '../../utils/PrintToPDF';
import NewOrdersReport from '../../components/Reports/NewOrdersReport';
import ApprovedOrdersReport from '../../components/Reports/ApprovedOrdersReport';
import CancelledOrdersReport from '../../components/Reports/CancelledOrdersReport';
import DeliveredOrdersReport from '../../components/Reports/DeliveredOrdersReport';
import AllOrdersReport from '../../components/Reports/AllOrdersReport';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import AllPayment from '../../components/Payment/AllPayment';
import ReceivedPayment from '../../components/Payment/ReceivedPayment';
import PendingPayment from '../../components/Payment/PendingPayment';

const Reports = () => {
  // querying the orders data
  const { data: allOrdersData } = useQuery(GET_ALL_ORDERS);
  const { data: newOrdersData } = useQuery(GET_NEW_ORDERS);
  const { data: cancelledOrdersData } = useQuery(GET_CANCELLED_ORDERS);
  const { data: deliveredOrdersData } = useQuery(GET_DELIVERED_ORDERS);
  const { data: ordersOnDeliveryData } = useQuery(GET_ON_DELIVERY_ORDERS);

  // querying the payment data
  const { data: allPaymentData } = useQuery(GET_ALL_PAYMENT);
  const { data: pendingPayment } = useQuery(GET_PENDING_PAYMENT);
  const { data: receivedPayment } = useQuery(GET_RECEIVED_PAYMENT);

  const { state } = useContext(AuthContext);
  const [report, setreport] = useState({
    type: '',
    reportType: '',
    dateFrom: null,
    dateTo: null,
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setreport({ ...report, [e.target.name]: value });
  };
  const generateData = (reportType) => {
    let data;
    if (reportType === 'All Orders') data = allOrdersData;
    else if (reportType === 'New Orders') data = newOrdersData;
    else if (reportType === 'Approved Orders') data = ordersOnDeliveryData;
    else if (reportType === 'Cancelled Orders') data = cancelledOrdersData;
    else if (reportType === 'Delivered Orders') data = deliveredOrdersData;
    else if (reportType === 'All Payment') data = allPaymentData;
    else if (reportType === 'Received Payment') data = receivedPayment;
    else if (reportType === 'Pending Payment') data = pendingPayment;
    return data;
  };

  const printReport = () => {
    generateData(report.reportType);
    pdf('#preview');
  };

  const date = new Date().toUTCString();
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="page_header rounded shadow-sm bg-secondary">
            <span>REPORT GENERATION</span>
          </div>
          <div className="row mt-2">
            <div className="col-md-5">
              <div className="shadow-sm bg-white p-4">
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
                  {/* Removed the date filter */}
                  {/* <div className="row">
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
                  </div> */}
                  {report.type === 'Orders' ? (
                    <div className="form-group">
                      <label>Select Order type</label>
                      <select
                        onChange={changeHandler}
                        defaultValue="Select one"
                        className="form-control"
                        name="reportType"
                        required
                      >
                        <option disabled value="Select one">
                          Select one
                        </option>
                        <option value="All Orders">All Orders</option>
                        <option value="New Orders">New Orders</option>
                        <option value="Approved Orders">Approved Orders</option>
                        <option value="Delivered Orders">
                          Delivered Orders
                        </option>
                        <option value="Cancelled Orders">
                          Cancelled Orders
                        </option>
                      </select>
                    </div>
                  ) : report.type === 'Payment' ? (
                    <div className="form-group">
                      <label>Select Payment type</label>
                      <select
                        onChange={changeHandler}
                        defaultValue="Select one"
                        className="form-control"
                        name="reportType"
                        required
                      >
                        <option disabled value="Select one">
                          Select one
                        </option>
                        <option value="All Payments">All Payments</option>
                        <option value="Received Payments">
                          Received Payments
                        </option>
                        <option value="Pending Payments">
                          Pending Payments
                        </option>
                      </select>
                    </div>
                  ) : report.type === 'Shipping' ? (
                    <div className="form-group">
                      <label>Select Shipping type</label>
                      <select
                        onChange={changeHandler}
                        defaultValue="Select one"
                        className="form-control"
                        name="reportType"
                        required
                      >
                        <option disabled value="Select one">
                          Select one
                        </option>
                        <option value="All Shipping">All Shipping</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  ) : null}
                  {/* <div className="form-group">
                    <label>Email</label>
                    <input
                    disabled
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={changeHandler}
                      // required
                    />
                  </div> */}
                  <div className="row mt-3">
                    <div className="col-md-6 p-2">
                      <ReactHTMLTableToExcel
                        table="preview"
                        filename={`${date}`}
                        sheet="sheet"
                        buttonText="Export"
                        className="btn btn-outline-success btn-block rounded-pill"
                      />
                    </div>
                    <div className="col-md-6 p-2">
                      <button
                        className="btn btn-outline-danger btn-block rounded-pill"
                        onClick={printReport}
                      >
                        <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                        <span>Print</span>
                      </button>
                    </div>
                    {/* <div className="col-md-4 p-2">
                      <button
                        className="btn btn-outline-secondary btn-block rounded-pill"
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <span>Email</span>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="bg-white shadow-sm p-4">
                <h4>Preview</h4>
                <hr />
                <div>
                  {report.reportType === 'All Orders' ? (
                    <AllOrdersReport allOrdersData={allOrdersData} />
                  ) : report.reportType === 'New Orders' ? (
                    <NewOrdersReport newOrdersData={newOrdersData} />
                  ) : report.reportType === 'Approved Orders' ? (
                    <ApprovedOrdersReport
                      ordersOnDelivery={ordersOnDeliveryData}
                    />
                  ) : report.reportType === 'Cancelled Orders' ? (
                    <CancelledOrdersReport
                      cancelledOrders={cancelledOrdersData}
                    />
                  ) : report.reportType === 'Delivered Orders' ? (
                    <DeliveredOrdersReport
                      deliveredOrders={deliveredOrdersData}
                    />
                  ) : report.reportType === 'All Payments' ? (
                    <AllPayment />
                  ) : report.reportType === 'Received Payments' ? (
                    <ReceivedPayment />
                  ) : report.reportType === 'Pending Payments' ? (
                    <PendingPayment />
                  ) : null}
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

export default Reports;
