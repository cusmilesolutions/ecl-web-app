import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_ON_DELIVERY_ORDERS,
  CANCEL_ORDER,
  ASSIGN_RIDER,
} from '../../../services/queries/order';
import { Spinner } from '../../global/Spinner';
import { GET_ALL_RIDERS } from '../../../services/queries/rider';

const OrdersOnDelivery = () => {
  // Query to get the approved orders
  const {
    loading: ordersOnDeliveryLoading,
    error: ordersOnDeliveryError,
    data: ordersOnDeliveryData,
  } = useQuery(GET_ON_DELIVERY_ORDERS, {
    pollInterval: 500,
  });

  // Query to get the riders
  const {
    loading: ridersLoading,
    error: ridersError,
    data: ridersData,
  } = useQuery(GET_ALL_RIDERS, {
    pollInterval: 500,
  });

  // Mutation to cancel an order
  const [cancelOrder] = useMutation(CANCEL_ORDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  const [assignRider] = useMutation(ASSIGN_RIDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  const [rider, setrider] = useState('');

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
                  <td>
                    <select
                      className="form-control"
                      value={rider}
                      onChange={(e) => {
                        setrider(e.target.value);
                      }}
                    >
                      <option defaultValue>Choose...</option>
                      {ridersData
                        ? ridersData.riders.map((rider) => (
                            <option key={rider.riderId} value={rider.riderId}>
                              {rider.riderId}
                            </option>
                          ))
                        : ridersLoading
                        ? 'Loading riders'
                        : null}
                    </select>
                  </td>
                  <td>
                    <div className="d-flex flex-row">
                      <button
                        onClick={() => {
                          assignRider({
                            variables: { id: order._id, riderID: rider },
                          }).then(() =>
                            console.log(`Order has been assigned to ${rider}`),
                          );
                        }}
                        className="btn btn-primary btn-sm mr-2"
                      >
                        Assign Rider
                      </button>
                      <button
                        onClick={() => {
                          cancelOrder({
                            variables: { id: order._id },
                          }).then(() => console.log('Cancelled order'));
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
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
