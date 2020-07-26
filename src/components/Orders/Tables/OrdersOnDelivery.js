import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ON_DELIVERY_ORDERS } from '../../../services/queries/order';
import { Spinner } from '../../global/Spinner';

const OrdersOnDelivery = () => {
  const {
    loading: ordersOnDeliveryLoading,
    error: ordersOnDeliveryError,
    data: ordersOnDeliveryData,
  } = useQuery(GET_ON_DELIVERY_ORDERS);

  return (
    <div>
      <div>
        {ordersOnDeliveryLoading ? (
          <Spinner size={50} color="danger" />
        ) : ordersOnDeliveryError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : ordersOnDeliveryData ? (
          <table className="table table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Order No.</th>
                <th scope="col">Starting point</th>
                <th scope="col">Destination</th>
                <th scope="col">Price(GHC)</th>
                <th scope="col">Rider</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ordersOnDeliveryData.subOrders.orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderNo}</td>
                  <td>{order.shipping.startPt}</td>
                  <td>{order.shipping.deliveryPt}</td>
                  <td>{order.payment.price}</td>
                  <td>{order.rider}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-primary btn-sm mr-2">
                        Assign Rider
                      </button>
                      <button className="btn btn-danger btn-sm">Remove</button>
                    </div>
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

export default OrdersOnDelivery;
