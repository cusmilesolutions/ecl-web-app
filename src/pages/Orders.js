import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faShippingFast,
  faClipboardCheck,
  faBan,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import NewOrders from '../components/Tables/NewOrders';
import DeliveredOrders from '../components/Tables/DeliveredOrders';
import CancelledOrders from '../components/Tables/CancelledOrders';
import OrdersOnDelivery from '../components/Tables/OrdersOnDelivery';

const Orders = () => {
  const [activity, setactivity] = useState({ title: 'View new orders' });
  const displayComponent = e => {
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
    <div>
      <div className="container">
        <div className="mt-3 w-auto">
          <div className="d-flex justify-content-center">
            <div
              id="new_orders"
              onClick={displayComponent}
              className="border border-2 p-1 pl-2 pr-2 selector bg-blue border-primary m-2 rounded-pill shadow-sm"
            >
              <FontAwesomeIcon id="new_orders" icon={faBoxOpen} />
              <span id="new_orders" className="ml-2 mr-2">
                New Orders
              </span>
              <span>2</span>
            </div>
            <div
              id="on_delivery"
              onClick={displayComponent}
              className="border border-2 p-1 pl-2 pr-2 selector bg-blue border-primary m-2 rounded-pill shadow-sm"
            >
              <FontAwesomeIcon id="on_delivery" icon={faShippingFast} />
              <span id="on_delivery" className="ml-2 mr-2">
                Orders on delivery
              </span>
              <span>5</span>
            </div>
            <div
              id="delivered"
              onClick={displayComponent}
              className="border border-2 p-1 pl-2 pr-2 selector bg-blue border-primary m-2 rounded-pill shadow-sm"
            >
              <FontAwesomeIcon id="delivered" icon={faClipboardCheck} />
              <span id="delivered" className="ml-2 mr-2">
                Delivered Orders
              </span>
              <span>256</span>
            </div>
            <div
              id="cancelled_order"
              onClick={displayComponent}
              className="border border-2 p-1 pl-2 pr-2 selector bg-blue border-primary m-2 rounded-pill shadow-sm"
            >
              <FontAwesomeIcon id="cancelled_order" icon={faBan} />
              <span id="cancelled_order" className="ml-2 mr-2">
                Cancelled Orders
              </span>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="m-3">
          <h6>{activity.title}</h6>
          <hr />
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
      </div>
    </div>
  );
};

export default Orders;
