import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const customerData = [
  {
    name: 'James Boadu',
    phone: '0744123756',
    numOfOrders: 29,
    amount: 978,
  },
];

const Customers = () => {
  return (
    <Fragment>
      <div style={{ height: 500 }} className="p-3 shadow-sm bg-white">
        <div className="row">
          <h3 className="col-md-4">Customers</h3>
          <div className="col-md-8">
            <div className="d-flex flex-row">
              <div className="mr-3 p-2 rounded stats_card">
                <FontAwesomeIcon size="lg" icon={faUsers} />
                <span className="ml-2">{customerData.length}</span>
              </div>
              <div className="mr-3 p-2 rounded stats_card">
                <FontAwesomeIcon size="lg" icon={faBoxOpen} />
                <span className="ml-2">
                  {customerData.reduce((acc, val) => acc + val.numOfOrders, 0)}
                </span>
              </div>
              <div className="flex-end">
                <button className="btn btn-block btn-info disabled">
                  Add Customer
                </button>
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
        </div>
      </div>
    </Fragment>
  );
};

export default Customers;
