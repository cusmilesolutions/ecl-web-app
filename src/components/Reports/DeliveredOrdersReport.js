import React from 'react';

const DeliveredOrdersReport = ({ deliveredOrders }) => {
  return (
    <table
      className="table table-sm table-hover table-responsive-md"
      id="preview"
    >
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Pick up</th>
          <th scope="col">Destination</th>
          <th scope="col">Delivery date</th>
          <th scope="col">Delivery time</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Rider</th>
        </tr>
      </thead>
      <tbody>
        {deliveredOrders.subOrders.orders.map((order) => (
          <tr key={order._id}>
            <td>{order.orderNo}</td>
            <td>{order.shipping.startPt}</td>
            <td>{order.shipping.deliveryPt}</td>
            <td>{order.shipping.dateDelivered}</td>
            <td>{order.shipping.timeDelivered}</td>
            <td>{order.payment.price}</td>
            <td>{order.rider}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveredOrdersReport;
