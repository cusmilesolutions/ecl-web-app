import React from 'react';

const ApprovedOrdersReport = ({ ordersOnDelivery }) => {
  return (
    <table
      className="table table-sm table-hover table-responsive-md"
      id="preview"
    >
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Starting point</th>
          <th scope="col">Destination</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Rider</th>
        </tr>
      </thead>
      <tbody>
        {ordersOnDelivery.subOrders.orders.map((order) => (
          <tr key={order._id}>
            <td>{order.orderNo}</td>
            <td>{order.shipping.startPt}</td>
            <td>{order.shipping.deliveryPt}</td>
            <td>{order.payment.price}</td>
            <td>{order.rider}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApprovedOrdersReport;
