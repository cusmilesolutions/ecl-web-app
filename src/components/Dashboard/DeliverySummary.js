import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faTruckLoading,
  faBan,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/react-hooks';
import {
  GET_CANCELLED_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
  GET_ALL_ORDERS,
} from '../Queries/order';

const DeliverySummary = () => {
  const { data: allOrders, loading: allOrdersLoading } = useQuery(
    GET_ALL_ORDERS
  );
  const {
    data: totalCancelledOrders,
    loading: totalCancelledOrdersLoading,
  } = useQuery(GET_CANCELLED_ORDERS);
  const {
    data: totalDeliveredOrders,
    loading: totalDeliveredOrdersLoading,
  } = useQuery(GET_DELIVERED_ORDERS);
  const {
    data: totalOrdersOnDelivery,
    loading: totalOrdersOnDeliveryLoading,
  } = useQuery(GET_ON_DELIVERY_ORDERS);

  return (
    <div className="shadow-sm p-2 mt-3 m-2 row bg-white">
      <div className="col m-2 shadow-sm rounded bg-warning text-white p-2">
        <div className="row">
          <div className="col-md-9">
            <p>TOTAL ORDERS</p>
            <h4>
              {allOrdersLoading ? (
                <div
                  style={{ width: 30, height: 30 }}
                  className="spinner-border text-white"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : allOrders ? (
                allOrders.orders.totalOrders
              ) : null}
            </h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="2x" icon={faCubes} />
          </div>
        </div>
      </div>
      <div className="col m-2 shadow-sm rounded bg-success text-white p-2">
        <div className="row">
          <div className="col-md-9">
            <p>ORDERS COMPLETED</p>
            <h4>
              {totalDeliveredOrdersLoading ? (
                <div
                  style={{ width: 30, height: 30 }}
                  className="spinner-border text-white"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : totalDeliveredOrders ? (
                totalDeliveredOrders.subOrders.totalOrders
              ) : null}
            </h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="2x" icon={faTruckLoading} />
          </div>
        </div>
      </div>
      <div className="col m-2 shadow-sm rounded bg-danger text-white p-2">
        <div className="row">
          <div className="col-md-9">
            <p>CANCELLED ORDERS</p>
            <h4>
              {totalCancelledOrdersLoading ? (
                <div
                  style={{ width: 30, height: 30 }}
                  className="spinner-border text-white"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : totalCancelledOrders ? (
                totalCancelledOrders.subOrders.totalOrders
              ) : null}
            </h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="2x" icon={faBan} />
          </div>
        </div>
      </div>
      <div className="col m-2 shadow-sm rounded bg-info text-white p-2">
        <div className="row">
          <div className="col-md-9">
            <p>ON DELIVERY</p>
            <h4>
              {totalOrdersOnDeliveryLoading ? (
                <div
                  style={{ width: 30, height: 30 }}
                  className="spinner-border text-white"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : totalOrdersOnDelivery ? (
                totalOrdersOnDelivery.subOrders.totalOrders
              ) : null}
            </h4>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon size="2x" icon={faShippingFast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySummary;
