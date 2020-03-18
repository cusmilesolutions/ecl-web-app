import React from 'react';
import { Link } from 'react-router-dom';

const Accounts = () => {
  return (
    <div>
      <div className="container row col-md-12">
        <div className="col-md-6">
          <div className="w-100 mx-auto mt-5 p-3">
            <h5>Riders</h5>
            <hr />
            <div>
              <ul className="acc_data_ul">
                <li className="acc_data">Number of riders: 3</li>
                <li className="acc_data">Total number of trips: 323</li>
                <li className="acc_data">Total revenue generated: GHC3,510</li>
                <li className="acc_data">Number of riders: 3</li>
              </ul>
            </div>

            <Link to="accounts/riders">
              <button className="btn btn-block btn-primary">View riders</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="w-100 mx-auto mt-5 p-3">
            <h5>Customers</h5>
            <hr />
            <div>
              <ul className="acc_data_ul">
                <li className="acc_data">Number of registered customers: 3</li>
                <li className="acc_data">Total number of orders: 323</li>
                <li className="acc_data">Total revenue made: GHC3,510</li>
                {/* <li className="acc_data">To</li> */}
              </ul>
            </div>
            <Link to="accounts/customers">
              <button className="btn btn-block btn-primary">
                View customers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
