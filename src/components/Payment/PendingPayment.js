import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PENDING_PAYMENT } from '../../services/queries/order';
import { Spinner } from '../global/Spinner';

const PendingPayment = () => {
  const { loading, data, error } = useQuery(GET_PENDING_PAYMENT);
  return (
    <div>
      <div>
        {loading ? (
          <Spinner size={50} color="danger" />
        ) : error ? (
          <div className="d-flex justify-content-center">
            <span>Data cannot be loaded</span>
          </div>
        ) : data ? (
          <table
            id="preview"
            className="table table-sm table-hover table-responsive-md"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Order No.</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {data.paymentStatus.orders.map((payment) => (
                <tr>
                  <td>{payment.sender.senderName}</td>
                  <td>{payment.orderNo}</td>
                  <td>{payment.payment.date}</td>
                  <td>{payment.payment.price}</td>
                  <td>{payment.payment.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default PendingPayment;
