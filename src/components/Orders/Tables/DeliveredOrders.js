import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_DELIVERED_ORDERS } from '../../Queries/order';

const DeliveredOrders = () => {
  const {
    loading: deliveredOrdersLoading,
    error: deliveredOrdersError,
    data: deliveredOrdersData,
  } = useQuery(GET_DELIVERED_ORDERS);
  return (
    <div>
      <div>
        {deliveredOrdersLoading ? (
          <div className="d-flex justify-content-center">
            <div
              style={{ width: 50, height: 50 }}
              className="spinner-border text-danger"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
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
                <th scope="col">Arrival</th>
                <th scope="col">Starting point</th>
                <th scope="col">Destination</th>
                <th scope="col">Price(GHC)</th>
                <th scope="col">Rider</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveredOrdersData.subOrders.orders.map((order) => (
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
        ) : null}
      </div>
    </div>
  );
};

export default DeliveredOrders;
