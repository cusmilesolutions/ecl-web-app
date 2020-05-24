import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingUsd,
  faSpinner,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import AllPayment from '../../components/Payment/AllPayment';
import ReceivedPayment from '../../components/Payment/ReceivedPayment';
import PendingPayment from '../../components/Payment/PendingPayment';

const Payments = () => {
  const { state } = useContext(AuthContext);
  const [activity, setactivity] = useState({ title: 'All Payment' });

  const displayComponent = (e) => {
    let comp = e.target.id;
    switch (comp) {
      case 'all_payment':
        setactivity({ title: 'All Payment' });
        break;
      case 'received_payment':
        setactivity({ title: 'Received Payment' });
        break;
      case 'pending_payment':
        setactivity({ title: 'Pending Payment' });
        break;
      default:
        return <AllPayment />;
    }
  };
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="page_header bg-secondary rounded shadow-sm">
            <span>PAYMENT HISTORY</span>
          </div>
          <div>
            <div className="d-flex justify-content-start">
              <div
                id="all_payment"
                onClick={displayComponent}
                className="btn btn-info p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
              >
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  id="all_payment"
                  icon={faWallet}
                />
                <span id="all_payment">All Payment</span>
              </div>
              <div
                id="received_payment"
                onClick={displayComponent}
                className="btn btn-success p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
              >
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  id="received_payment"
                  icon={faHandHoldingUsd}
                />
                <span id="received_payment">Received Payment</span>
              </div>
              <div
                id="pending_payment"
                onClick={displayComponent}
                className="btn btn-warning p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
              >
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  id="pending_payment"
                  icon={faSpinner}
                />
                <span id="pending_payment">Pending Payment</span>
              </div>
            </div>
          </div>
          <div style={{ height: 500 }} className="shadow-sm bg-white p-3">
            <span className="badge badge-primary p-2 mb-2">
              {activity.title}
            </span>
            <div>
              {activity.title === 'All Payment' ? (
                <AllPayment />
              ) : activity.title === 'Received Payment' ? (
                <ReceivedPayment />
              ) : activity.title === 'Pending Payment' ? (
                <PendingPayment />
              ) : (
                <AllPayment />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Payments;
