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
  faShippingFast
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { state, logout } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <header>ECL ADMIN</header>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
              </ul>
            ) : (
              <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Create an account
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
