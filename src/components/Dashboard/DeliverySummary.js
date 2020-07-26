import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faTruckLoading,
  faBan,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import {
  GET_CANCELLED_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
  GET_ALL_ORDERS,
} from '../../services/queries/order';
import { Spinner } from '../global/Spinner';

const DeliverySummary = () => {
  const { data: allOrders, loading: allOrdersLoading } = useQuery(
    GET_ALL_ORDERS,
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
    <div className="shadow-sm p-2 m-2 row bg-white">
      <div className="col m-2 shadow-sm rounded bg-warning text-white p-2">
        <div className="row">
          <div className="col-md-9">
            <p>TOTAL ORDERS</p>
            <h4>
              {allOrdersLoading ? (
                <Spinner size={30} color="white" />
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
                <Spinner size={30} color="white" />
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
                <Spinner size={30} color="white" />
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
                <Spinner size={30} color="white" />
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
