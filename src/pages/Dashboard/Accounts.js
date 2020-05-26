import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import {
  faMoneyBill,
  faUsers,
  faExchangeAlt,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import RiderList from '../Rider/RiderList';

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
const riderData = [
  {
    name: 'John Boadu',
    phone: '0744123756',
    numOfTrips: 29,
    revenue: 978,
  },
  {
    name: 'John Boadu',
    phone: '0244193456',
    numOfTrips: 29,
    revenue: 978,
  },
  {
    name: 'John Boadu',
    phone: '0242123456',
    numOfTrips: 29,
    revenue: 978,
  },
  {
    name: 'John Boadu',
    phone: '0244124456',
    numOfTrips: 29,
    revenue: 978,
  },
];
const customerData = [
  {
    name: 'James Boadu',
    phone: '0744123756',
    numOfOrders: 29,
    amount: 978,
  },
];

const Accounts = () => {
  const { state } = useContext(AuthContext);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <RiderList closeNewRider={closeModal} />
      </Modal>
      {state.isAuth ? (
        <div>
          <div className="page_header bg-secondary rounded shadow-sm">
            <span>ACCOUNTS</span>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div
                style={{ minHeight: 500 }}
                className="p-3 shadow-sm bg-white"
              >
                <div className="row">
                  <h3 className="col-md-4">Riders</h3>
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faMoneyBill} />
                        <span className="ml-2">
                          GH₵
                          {riderData.reduce((acc, val) => acc + val.revenue, 0)}
                        </span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faUsers} />
                        <span className="ml-2">{riderData.length}</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faExchangeAlt} />
                        <span className="ml-2">
                          {riderData.reduce(
                            (acc, val) => acc + val.numOfTrips,
                            0,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <table className="table table-sm table-hover table-responsive-md">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Trips</th>
                        <th scope="col">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riderData.map((rider) => (
                        <tr key={rider.phone}>
                          <td>{rider.name}</td>
                          <td>{rider.phone}</td>
                          <td>{rider.numOfTrips}</td>
                          <td>{rider.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    className="btn btn-info btn-block"
                    onClick={openModal}
                  >
                    Add New Rider
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ height: 500 }} className="p-3 shadow-sm bg-white">
                <div className="row">
                  <h3 className="col-md-4">Customers</h3>
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faMoneyBill} />
                        <span className="ml-2">
                          GH₵
                          {customerData.reduce(
                            (acc, val) => acc + val.amount,
                            0,
                          )}
                        </span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faUsers} />
                        <span className="ml-2">{customerData.length}</span>
                      </div>
                      <div className="mr-3 p-2 rounded stats_card">
                        <FontAwesomeIcon size="lg" icon={faBoxOpen} />
                        <span className="ml-2">
                          {customerData.reduce(
                            (acc, val) => acc + val.numOfOrders,
                            0,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <table className="table table-sm table-hover table-responsive-md">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerData.map((customer) => (
                        <tr key={customer.phone}>
                          <td>{customer.name}</td>
                          <td>{customer.phone}</td>
                          <td>{customer.numOfOrders}</td>
                          <td>{customer.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="btn btn-block btn-info disabled">
                    Add Customer
                  </button>
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

export default Accounts;
