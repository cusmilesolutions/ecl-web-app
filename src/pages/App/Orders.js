import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faShippingFast,
  faBan,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import NewOrders from '../../components/Orders/Tables/NewOrders';
import DeliveredOrders from '../../components/Orders/Tables/DeliveredOrders';
import CancelledOrders from '../../components/Orders/Tables/CancelledOrders';
import OrdersOnDelivery from '../../components/Orders/Tables/OrdersOnDelivery';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import AllOrders from '../../components/Orders/Tables/AllOrders';

const Orders = () => {
  const { state } = useContext(AuthContext);
  const [activity, setactivity] = useState({ title: 'All Orders' });

  const displayComponent = (e) => {
    let comp = e.target.id;
    switch (comp) {
      case 'all_orders':
        setactivity({ title: 'All Orders' });
        break;
      case 'new_orders':
        setactivity({ title: 'New Orders' });
        break;
      case 'on_delivery':
        setactivity({ title: 'Approved Orders' });
        break;
      case 'delivered':
        setactivity({ title: 'Delivered Orders' });
        break;
      case 'cancelled_orders':
        setactivity({ title: 'Cancelled Orders' });
        break;

      default:
        return <AllOrders />;
    }
  };
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="page_header rounded shadow-sm bg-secondary">
            <span>ORDERS DETAILS</span>
          </div>
          <div>
            <div>
              <div className="d-flex justify-content-start">
                <div
                  id="all_orders"
                  onClick={displayComponent}
                  className="btn btn-info p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon id="all_orders" icon={faBoxOpen} />
                  <span id="all_orders" className="ml-2 mr-2">
                    All Orders
                  </span>
                </div>
                <div
                  id="new_orders"
                  onClick={displayComponent}
                  className="btn btn-warning p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon id="new_orders" icon={faBoxOpen} />
                  <span id="new_orders" className="ml-2 mr-2">
                    New Orders
                  </span>
                </div>
                <div
                  id="on_delivery"
                  onClick={displayComponent}
                  className="btn btn-secondary p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon id="on_delivery" icon={faShippingFast} />
                  <span id="on_delivery" className="ml-2 mr-2">
                    Orders on delivery
                  </span>
                </div>
                <div
                  id="delivered"
                  onClick={displayComponent}
                  className="btn btn-success p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon id="delivered" icon={faCheckCircle} />
                  <span id="delivered" className="ml-2 mr-2">
                    Delivered Orders
                  </span>
                </div>
                <div
                  id="cancelled_orders"
                  onClick={displayComponent}
                  className="btn btn-danger p-2 mr-2 mt-2 mb-2 rounded shadow-sm"
                >
                  <FontAwesomeIcon id="cancelled_orders" icon={faBan} />
                  <span id="cancelled_orders" className="ml-2 mr-2">
                    Cancelled Orders
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 500 }} className="shadow-sm bg-white p-3">
            <span className="badge badge-primary p-2 mb-2">
              {activity.title}
            </span>
            <div>
              {activity.title === 'All Orders' ? (
                <AllOrders />
              ) : activity.title === 'New Orders' ? (
                <NewOrders />
              ) : activity.title === 'Approved Orders' ? (
                <OrdersOnDelivery />
              ) : activity.title === 'Delivered Orders' ? (
                <DeliveredOrders />
              ) : activity.title === 'Cancelled Orders' ? (
                <CancelledOrders />
              ) : (
                <AllOrders />
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

export default Orders;
