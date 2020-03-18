import React from 'react';
import SearchPrint from '../../components/SearchPrint';

const CustomerList = () => {
  const customers = [
    {
      username: 'isaacgyamfi8',
      name: 'Isaac Gyamfi',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'egyan99',
      name: 'Eric Gyimah',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'asern98',
      name: 'Ernest Asare',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'matt418',
      name: 'Matt Okai',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'michaella8',
      name: 'Michael Larwy',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'michaella8',
      name: 'Michael Larwy',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    },
    {
      username: 'michaella8',
      name: 'Michael Larwy',
      phone: '0576621657',
      address: 'Block 2, Adwoa Sarfo St.',
      numOfOrders: 12,
      dateJoined: '12/03/2019'
    }
  ];
  return (
    <div>
      <div className="m-2">
        <h5>Number of Customers: {customers.length}</h5>
      </div>
      <div className="m-2">
        <SearchPrint />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Full name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Total Orders</th>
              <th scope="col">Created</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.numOfOrders}</td>
                <td>{customer.dateJoined}</td>
                <td>
                  <button className="btn btn-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
