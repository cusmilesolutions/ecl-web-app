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

  if (ordersOnDeliveryLoading) return <p>Loading...</p>;
  if (ordersOnDeliveryError) return <p>Error {ordersOnDeliveryError}</p>;
  const ordersOnDelivery = ordersOnDeliveryData.subOrders;

  return (
    <div>
      <SearchPrint />
      <div>
        <table className="table table-sm table-hover table-responsive">
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
            {ordersOnDelivery.map((order) => (
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
      </div>
    </div>
  );
};

export default OrdersOnDelivery;
