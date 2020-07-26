import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheckCircle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPPINGS } from '../../services/queries/order';
import { Spinner } from '../global/Spinner';

const AllShippings = () => {
  const { data, loading, error } = useQuery(GET_ALL_SHIPPINGS);

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
            className="table table-sm table-hover table-responsive-md table-striped"
            id="table_all_shipping"
          >
            <thead>
              <tr>
                <th scope="col">OrderID</th>
                <th scope="col">Sender Name</th>
                <th scope="col">Sender Phone</th>
                <th scope="col">Receiver Name</th>
                <th scope="col">Receiver Phone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.orders.orders.map((data) => (
                <tr>
                  <td>{data.orderNo}</td>
                  <td>{data.sender.senderName}</td>
                  <td>{data.sender.senderPhone}</td>
                  <td>{data.recipient.recipientName}</td>
                  <td>{data.recipient.recipientPhone}</td>
                  <td>
                    {data.orderStatus === 'delivered' ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success"
                      />
                    ) : data.orderStatus === 'cancelled' ? (
                      <FontAwesomeIcon icon={faBan} className="text-danger" />
                    ) : null}
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm mr-2">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
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

export default AllShippings;
