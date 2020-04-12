import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faTruckLoading,
  faBan,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';

const DeliverySummary = ({
  totalDeliveredOrders,
  totalOrdersOnDelivery,
  totalCancelledOrders,
  totalOrders,
}) => {
  return (
    <div className="shadow p-3 m-2 row">
      <div className="col m-2 shadow-sm rounded summary_card_inner_1 p-3  ">
        <div className="row col-md-12">
          <div className="col-md-9">
            <p>TOTAL ORDERS</p>
            <h4>{totalOrders}</h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="5x" icon={faCubes} />
          </div>
        </div>
      </div>
      <div className="col m-2 shadow-sm rounded summary_card_inner_2 p-3  ">
        <div className="row col-md-12">
          <div className="col-md-9">
            <p>ORDERS COMPLETED</p>
            <h4>{totalDeliveredOrders}</h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="5x" icon={faTruckLoading} />
          </div>
        </div>
      </div>
      <div className="w-100"></div>
      <div className="col m-2 shadow-sm rounded summary_card_inner_3 p-3  ">
        <div className="row col-md-12">
          <div className="col-md-9">
            <p>CANCELLED ORDERS</p>
            <h4>{totalCancelledOrders}</h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="5x" icon={faBan} />
          </div>
        </div>
      </div>
      <div className="col m-2 shadow-sm rounded summary_card_inner_4 p-3  ">
        <div className="row col-md-12">
          <div className="col-md-9">
            <p>ON DELIVERY</p>
            <h4>{totalOrdersOnDelivery}</h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="5x" icon={faShippingFast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySummary;
