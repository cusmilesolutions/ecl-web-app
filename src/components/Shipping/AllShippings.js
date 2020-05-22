import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheckCircle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';

const AllShippings = () => {
  const allShippingData = [
    {
      orderId: '1285',
      sender: '0244123456',
      receiver: '021134378',
      status: 'shipped',
    },
    {
      orderId: '1445',
      sender: '0244123456',
      receiver: '021134378',
      status: 'cancelled',
    },
    {
      orderId: '1244',
      sender: '0244123456',
      receiver: '021134378',
      status: 'shipped',
    },
  ];
  return (
    <div>
      <div>
        <table
          className="table table-sm table-hover table-responsive-md table-striped"
          id="table_all_shipping"
        >
          <thead>
            <tr>
              <th scope="col">OrderID</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allShippingData.map((data) => (
              <tr>
                <td>{data.orderId}</td>
                <td>{data.sender}</td>
                <td>{data.receiver}</td>
                <td>
                  {data.status === 'shipped' ? (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success"
                    />
                  ) : data.status === 'cancelled' ? (
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
      </div>
    </div>
  );
};

export default AllShippings;
