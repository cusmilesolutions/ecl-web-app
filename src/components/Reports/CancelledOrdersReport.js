import React from 'react';

const CancelledOrdersReport = ({ cancelledOrders }) => {
  return (
    <table
      className="table table-sm table-hover table-responsive-md"
      id="preview"
    >
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Sender Name</th>
          <th scope="col">Sender Phone</th>
          <th scope="col">Item type</th>
          <th scope="col">Item name</th>
          <th scope="col">Item count</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Starting point</th>
          <th scope="col">Delivery point</th>
        </tr>
      </thead>
      <tbody>
        {cancelledOrders.subOrders.orders.map((order) => (
          <tr key={order._id}>
            <td>{order.orderNo}</td>
            <td>{order.sender.senderName}</td>
            <td>{order.sender.senderPhone}</td>
            <td>{order.item.itemType}</td>
            <td>{order.item.itemName}</td>
            <td>{order.item.itemCount}</td>
            <td>{order.payment.price}</td>
            <td>{order.shipping.startPt}</td>
            <td>{order.shipping.deliveryPt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CancelledOrdersReport;
