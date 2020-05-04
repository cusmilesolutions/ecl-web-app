import React from 'react';
import SearchPrint from '../SearchPrint';
import { GET_NEW_ORDERS } from '../../Queries/order';
import { useQuery } from '@apollo/react-hooks';

const NewOrders = () => {
  const {
    loading: newOrdersLoading,
    error: newOrdersError,
    data: newOrdersData,
  } = useQuery(GET_NEW_ORDERS);

  return (
    <div className="mt-2">
      <SearchPrint />
      <div>
        {newOrdersLoading ? (
          <div className="d-flex justify-content-center">
            <div
              style={{ width: 50, height: 50 }}
              className="spinner-border text-danger"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : newOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : newOrdersData ? (
          <table className="table table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Order No.</th>
                <th scope="col">Customer name</th>
                <th scope="col">Customer phone</th>
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
              {newOrdersData.subOrders.orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderNo}</td>
                  <td>{order.customerName}</td>
                  <td>{order.customerPhone}</td>
                  <td>{order.itemType}</td>
                  <td>{order.itemName}</td>
                  <td>{order.itemCount}</td>
                  <td>{order.price}</td>
                  <td>{order.startPt}</td>
                  <td>{order.deliveryPt}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-primary btn-sm mr-2">
                        View
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

export default NewOrders;
