import React from 'react';

const Customer = ({ customer }) => {
  return (
    <div className="shadow-sm shadow p-2 m-2 w-20 customer_card_div">
      <div className="row col-md-12">
        <div className="col-md-2">
          <div className="rounded-circle"></div>
        </div>
        <div className="col-md-10">
          <h6>{customer.name}</h6>
        </div>
      </div>
      <div>
        <p>
          Phone: <span>{customer.phone}</span>
        </p>
        <p>
          Address: <span>{customer.address}</span>
        </p>
        <p>
          Orders: <span>{customer.numOfOrders}</span>
        </p>
        <p>
          Joined: <span>{customer.dateJoined}</span>
        </p>
      </div>
      <div>
        <button className="mini_btn shadow-sm rounded">View orders</button>
      </div>
    </div>
  );
};

export default Customer;
