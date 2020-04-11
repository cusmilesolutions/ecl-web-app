import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExcel,
  faFileExport,
  faFilePdf,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Reports = ({ loading }) => {
  const { state } = useContext(AuthContext);
  const [report, setreport] = useState({
    type: '',
    dateFrom: null,
    dateTo: null,
  });
  const changeHandler = (e) => {
    const value = e.target.value;
    setreport({ ...report, [e.target.name]: value });
  };
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div className="shadow w-50 mx-auto mt-5 bg-white p-5">
          <div>
            <h4>Reports</h4>
          </div>
          <hr />
          <form>
            <div className="form-group">
              <label>Report Type</label>
              <select className="form-control">
                <option>Orders</option>
                <option>Shipping</option>
                <option>Customers</option>
                <option>Payment</option>
              </select>
            </div>
            <div className="row col-md-12">
              <div className="form-group col-md-6">
                <label>Date From</label>
                <input
                  onChange={changeHandler}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Report Type</label>
                <input
                  onChange={changeHandler}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="row col-md-12 mt-3">
              <div className="col-md-4">
                <button
                  className="btn btn-outline-success btn-block rounded-pill"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faFileExport} className="mr-2" />
                  {loading ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm mr-3"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span>Exporting to excel</span>
                    </span>
                  ) : (
                    'Export'
                  )}
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-danger btn-block rounded-pill"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  {loading ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm mr-3"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span>Generating PDF</span>
                    </span>
                  ) : (
                    'Print'
                  )}
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-secondary btn-block rounded-pill"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  {loading ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm mr-3"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span>Sending</span>
                    </span>
                  ) : (
                    'Email'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Reports;
