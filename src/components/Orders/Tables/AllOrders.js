import React from 'react';
import { GET_ALL_ORDERS } from '../../Queries/order';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faShippingFast,
  faBan,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const AllOrders = () => {
  const {
    loading: allOrdersLoading,
    error: allOrdersError,
    data: allOrdersData,
  } = useQuery(GET_ALL_ORDERS);

  return (
    <div>
      <div>
        {allOrdersLoading ? (
          <div className="d-flex justify-content-center">
            <div
              style={{ width: 50, height: 50 }}
              className="spinner-border text-danger"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : allOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : allOrdersData ? (
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrdersData.orders.orders.map((order) => (
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
                    {order.status === 'pending' ? (
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        className="text-warning"
                      />
                    ) : order.status === 'approved' ? (
                      <FontAwesomeIcon
                        icon={faShippingFast}
                        className="text-secondary"
                      />
                    ) : order.status === 'cancelled' ? (
                      <FontAwesomeIcon icon={faBan} className="text-danger" />
                    ) : order.status === 'delivered' ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success"
                      />
                    ) : null}
                  </td>
                  {/* <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-success btn-sm mr-2">
                        Confirm
                      </button>
                      <button className="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default AllOrders;
