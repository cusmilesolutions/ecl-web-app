import React, {useContext, useState} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {Redirect} from 'react-router';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faSearch,
  faWallet
} from "@fortawesome/free-solid-svg-icons";
import AllPayment from "../../components/Payment/AllPayment";
import ReceivedPayment from "../../components/Payment/ReceivedPayment";

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
      default:
        return <AllPayment />;
    }
  };
  return (
    <React.Fragment>
      {state.isAuth ? <div>
        <div className="row col-md-12">
          <h1 className="m-4"> PAYMENT HISTORY</h1>
        </div>
        <div className="row col-md-12 ml-2">
                <div id="all_payment" onClick={displayComponent} className="border border-2 pt-2 pl-2 pr-2 selector  bg-blue m-2 rounded-pill shadow-sm">
                  <FontAwesomeIcon id="all_payment" icon={faWallet} />
                  <span id="all_payment" className="ml-2 mr-2">
                    All Payment
                  </span>
                </div>
                <div id="received_payment" onClick={displayComponent} className="border border-2 pt-2 pl-2 pr-2 selector  bg-blue m-2 rounded-pill shadow-sm">
                  <FontAwesomeIcon id="received_payment" icon={faHandHoldingUsd} />
                  <span id="received_payment" className="ml-2 mr-2">
                    Received Payment
                  </span>
                </div>
                <div className="border d-flex align-items-center  border-2 p-1 pl-2 pr-2 bg-blue m-2 rounded shadow-sm">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" name="search" placeholder="Search by name "/>
                </div>
        </div>
        <div style={{ height: 500 }} className="shadow-sm bg-white p-3">
          <span className="badge badge-pill badge-primary ml-3">{activity.title}</span>
            <div>
              {activity.title === 'All Payment' ? (
                <AllPayment />
              ) : activity.title === 'Received Payment' ? (
                <ReceivedPayment />
              ) : (
                <AllPayment />
              )}
            </div>
          </div>
      </div> : <Redirect to="/login" />}{' '}
    </React.Fragment>
  );
};

export default Payments;
