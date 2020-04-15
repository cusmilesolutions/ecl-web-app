import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faUsers,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

const Accounts = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="container row col-md-12">
            <div className="col-md-6">
              <div className="w-100 mx-auto mt-5 p-3 shadow-sm">
                <div className="row">
                  <h3 className="col-md-4">Riders</h3>
                  <div className="col-md-8 m-md-auto">
                    <div className="d-flex flex-row">
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faMoneyBill} />
                        <span className="ml-2">GHC3,510</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faUsers} />
                        <span className="ml-2">4</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faExchangeAlt} />
                        <span className="ml-2">51</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div></div>

                <Link to="accounts/riders">
                  <button className="btn btn-block btn-primary">
                    View riders
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="w-100 mx-auto mt-5 p-3 shadow-sm">
                <div className="row">
                  <h3 className="col-md-4">Customers</h3>
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faMoneyBill} />
                        <span className="ml-2">GHC3,510</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faUsers} />
                        <span className="ml-2">4</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faExchangeAlt} />
                        <span className="ml-2">51</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="border border-info shadow-sm">
                    <div className="d-flex flex-row">
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                  </div>
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
