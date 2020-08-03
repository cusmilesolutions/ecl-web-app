import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCreditCard,
  faUsers,
  faShippingFast,
  faFileArchive,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import CreateOrder from '../Orders/CreateOrder';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Navbar = () => {
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const { state, logout } = useContext(AuthContext);
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <CreateOrder
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      </Modal>
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
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </span>
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
              <li className="nav-item">
                <Link to="/reports" className="nav-link">
                  <FontAwesomeIcon icon={faFileArchive} />
                  <span className="ml-2">Reports</span>
                </Link>
              </li>
            </ul>
          ) : null}
          <div>
            {state.isAuth ? (
              <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                  <Link
                    to="/orders"
                    onClick={() => setIsOpen(true)}
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <span className="ml-2">Create</span>
                  </Link>
                </li>
                <li className="nav-item bg-danger">
                  <Link to="/" onClick={logout} className="nav-link">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="ml-2">Logout</span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
