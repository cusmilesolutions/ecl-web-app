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

  return (
    <div>
      <SearchPrint />
      <div>
        {cancelledOrdersLoading ? (
          <div className="d-flex justify-content-center">
            <div
              style={{ width: 50, height: 50 }}
              className="spinner-border text-danger"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : cancelledOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : cancelledOrdersData ? (
          <table className="table table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Order No.</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Phone</th>
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
                  <td>{order.customerName}</td>
                  <td>{order.customerPhone}</td>
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
        ) : null}
      </div>
    </div>
  );
};

export default CancelledOrders;
