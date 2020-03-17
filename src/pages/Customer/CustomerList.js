import React from 'react';

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
    }
  ];
  return (
    <div>
      <div className="m-2">
        <h5>Number of Customers: </h5>
      </div>
      <div></div>
    </div>
  );
};

export default CustomerList;
