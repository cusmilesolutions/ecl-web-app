import React from 'react';
import SearchPrint from '../SearchPrint';
import { useQuery } from '@apollo/react-hooks';
import { GET_DELIVERED_ORDERS } from '../../Queries/order';

const DeliveredOrders = () => {
  const {
    loading: deliveredOrdersLoading,
    error: deliveredOrdersError,
    data: deliveredOrdersData,
  } = useQuery(GET_DELIVERED_ORDERS);

  if (deliveredOrdersLoading) return <p>Loading...</p>;
  if (deliveredOrdersError) return <p>Error {deliveredOrdersError}</p>;
  const deliveredOrders = deliveredOrdersData.subOrders;

  return (
    <div>
      <SearchPrint />
      <div>
        <table className="table table-sm table-hover" id="delivered_orders_table">
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
            {deliveredOrders.map((order) => (
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
      </div>
    </div>
  );
};

export default DeliveredOrders;
