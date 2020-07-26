import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBan,
  faBoxOpen,
  faCheckCircle,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';

const AllOrdersReport = ({ allOrdersData }) => {
  return (
    <table className="table table-sm table-hover table-responsive-md">
      <thead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Sender name</th>
          <th scope="col">Sender phone</th>
          <th scope="col">Item type</th>
          <th scope="col">Item name</th>
          <th scope="col">Item count</th>
          <th scope="col">Price(GHC)</th>
          <th scope="col">Starting point</th>
          <th scope="col">Delivery point</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {allOrdersData.orders.orders.map((order) => (
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
            <td>
              {order.orderStatus === 'pending' ? (
                <FontAwesomeIcon icon={faBoxOpen} className="text-warning" />
              ) : order.orderStatus === 'approved' ? (
                <FontAwesomeIcon
                  icon={faShippingFast}
                  className="text-secondary"
                />
              ) : order.orderStatus === 'cancelled' ? (
                <FontAwesomeIcon icon={faBan} className="text-danger" />
              ) : order.orderStatus === 'delivered' ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success"
                />
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default AllOrdersReport;
