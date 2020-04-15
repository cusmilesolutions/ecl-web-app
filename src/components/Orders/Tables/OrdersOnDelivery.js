import React from 'react';
import SearchPrint from '../SearchPrint';
import { useQuery } from '@apollo/react-hooks';
import { GET_ON_DELIVERY_ORDERS } from '../../Queries/order';

const OrdersOnDelivery = () => {
  const {
    loading: ordersOnDeliveryLoading,
    error: ordersOnDeliveryError,
    data: ordersOnDeliveryData,
  } = useQuery(GET_ON_DELIVERY_ORDERS);

  return (
    <div>
      <SearchPrint />
      <div>
        {ordersOnDeliveryLoading ? (
          <div className="d-flex justify-content-center">
            <div
              style={{ width: 50, height: 50 }}
              className="spinner-border text-danger"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : ordersOnDeliveryError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : ordersOnDeliveryData ? (
          <table className="table table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Order No.</th>
                <th scope="col">Pick up</th>
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
                  <td>{order.pickUp}</td>
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
        ) : null}
      </div>
    </div>
  );
};

export default OrdersOnDelivery;
