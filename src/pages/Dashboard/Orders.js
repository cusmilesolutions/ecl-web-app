import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faShippingFast,
  faClipboardCheck,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import NewOrders from '../../components/Orders/Tables/NewOrders';
import DeliveredOrders from '../../components/Orders/Tables/DeliveredOrders';
import CancelledOrders from '../../components/Orders/Tables/CancelledOrders';
import OrdersOnDelivery from '../../components/Orders/Tables/OrdersOnDelivery';
import Updates from '../../components/Orders/Updates';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';

const Orders = () => {
  const { state } = useContext(AuthContext);
  const [activity, setactivity] = useState({ title: 'View new orders' });

  const displayComponent = (e) => {
    let comp = e.target.id;
    switch (comp) {
      case 'new_orders':
        setactivity({ title: 'View new orders' });
        break;
      case 'on_delivery':
        setactivity({ title: 'Orders on delivery' });
        break;
      case 'delivered':
        setactivity({ title: 'Delivered Orders' });
        break;
      case 'cancelled_orders':
        setactivity({ title: 'Cancelled Orders' });
        break;

      default:
        return <NewOrders />;
    }
  };
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="container">
            <div className="mt-1 w-auto">
              <div className="d-flex justify-content-center">
                <div
                  id="new_orders"
                  onClick={displayComponent}
                  className="border border-2 p-1 pl-2 pr-2 selector card_div bg-blue m-2 rounded-pill shadow-sm"
                >
                  <FontAwesomeIcon id="new_orders" icon={faBoxOpen} />
                  <span id="new_orders" className="ml-2 mr-2">
                    New Orders
                  </span>
                </div>
                <div
                  id="on_delivery"
                  onClick={displayComponent}
                  className="border border-2 p-1 pl-2 pr-2 selector card_div bg-blue m-2 rounded-pill shadow-sm"
                >
                  <FontAwesomeIcon id="on_delivery" icon={faShippingFast} />
                  <span id="on_delivery" className="ml-2 mr-2">
                    Orders on delivery
                  </span>
                </div>
                <div
                  id="delivered"
                  onClick={displayComponent}
                  className="border border-2 p-1 pl-2 pr-2 selector card_div bg-blue m-2 rounded-pill shadow-sm"
                >
                  <FontAwesomeIcon id="delivered" icon={faClipboardCheck} />
                  <span id="delivered" className="ml-2 mr-2">
                    Delivered Orders
                  </span>
                </div>
                <div
                  id="cancelled_orders"
                  onClick={displayComponent}
                  className="border border-2 p-1 pl-2 pr-2 selector card_div bg-blue m-2 rounded-pill shadow-sm"
                >
                  <FontAwesomeIcon id="cancelled_orders" icon={faBan} />
                  <span id="cancelled_orders" className="ml-2 mr-2">
                    Cancelled Orders
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12">
            <div className="col-md-10">
              <h6>{activity.title}</h6>
              <div>
                {activity.title === 'View new orders' ? (
                  <NewOrders />
                ) : activity.title === 'Orders on delivery' ? (
                  <OrdersOnDelivery />
                ) : activity.title === 'Delivered Orders' ? (
                  <DeliveredOrders />
                ) : activity.title === 'Cancelled Orders' ? (
                  <CancelledOrders />
                ) : (
                  <NewOrders />
                )}
              </div>
            </div>
            <Updates />
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Orders;
