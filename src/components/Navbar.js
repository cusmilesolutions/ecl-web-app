import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { AuthContext } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faEnvelope,
  faUser,
  faCreditCard,
  faUsers,
  faShippingFast,
  faFileArchive,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { state, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <header>
        <Link className="navbar-brand" to="/">
          ECL ADMIN
        </Link>
      </header>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {state.isAuth ? (
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                <FontAwesomeIcon icon={faShippingFast} />
                <span className="ml-2">Orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/payments" className="nav-link">
                <FontAwesomeIcon icon={faCreditCard} />
                <span className="ml-2">Payments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/accounts" className="nav-link">
                <FontAwesomeIcon icon={faUsers} />
                <span className="ml-2">Accounts</span>
              </Link>
            </li>
          </ul>
        ) : null}
        <div>
          {state.isAuth ? (
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon={faBell} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={logout} className="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link">
                  <FontAwesomeIcon icon={faFileArchive} />
                  <span className="ml-2">Reports</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shipping" className="nav-link">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                  <span className="ml-2">Shipping</span>
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
