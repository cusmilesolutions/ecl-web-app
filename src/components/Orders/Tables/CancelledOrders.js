import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANCELLED_ORDERS } from '../../../services/queries/order';
import { Spinner } from '../../global/Spinner';

const CancelledOrders = () => {
  const {
    loading: cancelledOrdersLoading,
    error: cancelledOrdersError,
    data: cancelledOrdersData,
  } = useQuery(GET_CANCELLED_ORDERS);

  return (
    <div>
      <div>
        {cancelledOrdersLoading ? (
          <Spinner size={50} color="danger" />
        ) : cancelledOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : cancelledOrdersData ? (
          <table className="table table-sm table-hover table-responsive-md">
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cancelledOrdersData.subOrders.orders.map((order) => (
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
                    <button className="btn btn-primary btn-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default CancelledOrders;
