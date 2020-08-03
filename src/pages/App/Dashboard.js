import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

import DeliverySummary from '../../components/Dashboard/DeliverySummary';
import RiderDaily from '../../components/Dashboard/Graphs/RidersDaily';
import TodayRevenue from '../../components/Dashboard/Graphs/TodayRevenue';
import WeeklyRevenue from '../../components/Dashboard/Graphs/WeeklyRevenue';
import TaskManagement from '../../components/Dashboard/TaskManager';
import { useQuery } from '@apollo/client';
import {
  GET_ALL_ORDERS,
  GET_CANCELLED_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
} from '../../services/queries/order';

const Dashboard = () => {
  const { state } = useContext(AuthContext);

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
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div>
            <DeliverySummary
              allOrders={allOrders}
              allOrdersLoading={allOrdersLoading}
              totalCancelledOrders={totalCancelledOrders}
              totalCancelledOrdersLoading={totalCancelledOrdersLoading}
              totalDeliveredOrders={totalDeliveredOrders}
              totalDeliveredOrdersLoading={totalDeliveredOrdersLoading}
              totalOrdersOnDelivery={totalOrdersOnDelivery}
              totalOrdersOnDeliveryLoading={totalOrdersOnDeliveryLoading}
            />
          </div>
          <TaskManagement />
          <div className="row">
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <TodayRevenue />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <RiderDaily />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <WeeklyRevenue />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Dashboard;
