import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Accounts = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="container row col-md-12">
            <div className="col-md-6">
              <div className="w-100 mx-auto mt-5 p-3">
                <h1>Riders</h1>
                <hr />
                <div>
                  <p>Number of riders: 3</p>
                  <p>Total number of trips: 323</p>
                  <p>Total revenue generated: GHC3,510</p>
                </div>

                <Link to="accounts/riders">
                  <button className="btn btn-block btn-primary">
                    View riders
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="w-100 mx-auto mt-5 p-3">
                <h1>Customers</h1>
                <hr />
                <div>
                  <p>Number of registered customers: 3</p>
                  <p>Total number of orders: 323</p>
                  <p>Total revenue made: GHC3,510</p>
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
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Accounts;
