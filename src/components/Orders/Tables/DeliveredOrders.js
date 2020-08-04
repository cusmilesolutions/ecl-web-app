import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DELIVERED_ORDERS } from '../../../services/queries/order';
import { Spinner } from '../../global/Spinner';

const DeliveredOrders = () => {
  const {
    loading: deliveredOrdersLoading,
    error: deliveredOrdersError,
    data: deliveredOrdersData,
  } = useQuery(GET_DELIVERED_ORDERS, {
    pollInterval: 500,
  });
  return (
    <div>
      <div>
        {deliveredOrdersLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner size={50} color="danger" />
          </div>
        ) : deliveredOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : deliveredOrdersData ? (
          <table className="table table-sm table-hover table-responsive-md">
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
              {deliveredOrdersData.subOrders.orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderNo}</td>
                  <td>{order.shipping.startPt}</td>
                  <td>{order.shipping.deliveryPt}</td>
                  <td>{order.shipping.dateDeliverd}</td>
                  <td>{order.shipping.timeDelivered}</td>
                  <td>{order.payment.price}</td>
                  <td>{order.rider._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default DeliveredOrders;
