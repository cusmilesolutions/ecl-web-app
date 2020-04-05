import React from 'react';
import SearchPrint from '../SearchPrint';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANCELLED_ORDERS } from '../../Queries/order';

const CancelledOrders = () => {
  const {
    loading: cancelledOrdersLoading,
    error: cancelledOrdersError,
    data: cancelledOrdersData,
  } = useQuery(GET_CANCELLED_ORDERS);

  if (cancelledOrdersLoading) return <p>Loading...</p>;
  if (cancelledOrdersError) return <p>Error {cancelledOrdersError}</p>;
  const cancelledOrders = cancelledOrdersData.subOrders;

  return (
    <div>
      <SearchPrint />
      <div>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Order No.</th>
              <th scope="col">Customer</th>
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
            {cancelledOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.orderNo}</td>
                <td>{order.customer.phone}</td>
                <td>{order.type}</td>
                <td>{order.itemName}</td>
                <td>{order.itemCount}</td>
                <td>{order.price}</td>
                <td>{order.startPt}</td>
                <td>{order.deliveryPt}</td>
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

export default CancelledOrders;
