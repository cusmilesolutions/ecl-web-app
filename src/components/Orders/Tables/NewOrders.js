import React from 'react';
import {
  GET_NEW_ORDERS,
  CANCEL_ORDER,
  APPROVE_ORDER,
} from '../../../services/queries/order';
import { useQuery, useMutation } from '@apollo/client';
import { Spinner } from '../../global/Spinner';

const NewOrders = () => {
  const {
    loading: newOrdersLoading,
    error: newOrdersError,
    data: newOrdersData,
  } = useQuery(GET_NEW_ORDERS, {
    pollInterval: 500,
  });

  const [cancelOrder] = useMutation(CANCEL_ORDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  const [approveOrder] = useMutation(APPROVE_ORDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });

  return (
    <div>
      <div>
        {newOrdersLoading ? (
          <Spinner size={50} color="danger" />
        ) : newOrdersError ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : newOrdersData ? (
          <table className="table table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Order No.</th>
                <th scope="col">Sender name</th>
                <th scope="col">Sender phone</th>
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
                  <td>{order.sender.senderName}</td>
                  <td>{order.sender.senderPhone}</td>
                  <td>{order.item.itemType}</td>
                  <td>{order.item.itemName}</td>
                  <td>{order.item.itemCount}</td>
                  <td>{order.payment.price}</td>
                  <td>{order.shipping.startPt}</td>
                  <td>{order.shipping.deliveryPt}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button
                        onClick={() => {
                          approveOrder({
                            variables: { id: order._id },
                          }).then(() => console.log('Order approved'));
                        }}
                        type="submit"
                        formAction="/orders"
                        className="btn btn-success btn-sm mr-2"
                      >
                        Confirm
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

export default NewOrders;
