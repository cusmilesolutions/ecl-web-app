import React from 'react';

const NewOrdersReport = ({ newOrdersData }) => {
  return (
    <table className="table table-sm table-hover table-responsive" id="preview">
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Customer</th>
          <th scope="col">Item type</th>
          <th scope="col">Item name</th>
          <th scope="col">Item count</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Starting point</th>
          <th scope="col">Delivery point</th>
        </tr>
      </thead>
      <tbody>
        {newOrdersData.subOrders.map((order) => (
          <tr key={order._id}>
            <td>{order.orderNo}</td>
            <td>{order.customer}</td>
            <td>{order.itemType}</td>
            <td>{order.itemName}</td>
            <td>{order.itemCount}</td>
            <td>{order.price}</td>
            <td>{order.startPt}</td>
            <td>{order.deliveryPt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewOrdersReport;
