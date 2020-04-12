import React from 'react';

const DeliveredOrdersReport = ({ deliveredOrders }) => {
  return (
    <table className="table table-sm table-hover table-responsive" id="preview">
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Pick up</th>
          <th scope="col">Arrival</th>
          <th scope="col">Starting point</th>
          <th scope="col">Destination</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Rider</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {deliveredOrders.subOrders.map((order) => (
          <tr key={order._id}>
            <td>{order.orderNo}</td>
            <td>{order.pickUp}</td>
            <td>{order.arrival}</td>
            <td>{order.startPt}</td>
            <td>{order.destination}</td>
            <td>{order.price}</td>
            <td>{order.rider}</td>
            <td>
              <button className="btn btn-primary btn-sm">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveredOrdersReport;
