import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import { routes } from './routes';

import { useQuery } from '@apollo/react-hooks';
import {
  GET_CANCELLED_ORDERS,
  GET_NEW_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS
} from './components/Queries';
import { OrdersContext } from './contexts/OrdersContext';

function App() {
  const {
    setcancelledOrders,
    setnewOrders,
    setordersOnDelivery,
    setdeliveredOrders
  } = useContext(OrdersContext);

  const {
    loading: cancelledOrdersLoading,
    error: cancelledOrdersError,
    data: cancelledOrdersData
  } = useQuery(GET_CANCELLED_ORDERS);
  const {
    loading: newOrdersLoading,
    error: newOrdersError,
    data: newOrdersData
  } = useQuery(GET_NEW_ORDERS);

  const {
    loading: deliveredOrdersLoading,
    error: deliveredOrdersError,
    data: deliveredOrdersData
  } = useQuery(GET_DELIVERED_ORDERS);

  const {
    loading: ordersOnDeliveryLoading,
    error: ordersOnDeliveryError,
    data: ordersOnDeliveryData
  } = useQuery(GET_ON_DELIVERY_ORDERS);

  if (cancelledOrdersLoading) return <p>Loading...</p>;
  if (cancelledOrdersError) return <p>Error {cancelledOrdersError}</p>;
  setcancelledOrders(cancelledOrdersData.subOrders);

  if (newOrdersLoading) return <p>Loading...</p>;
  if (newOrdersError) return <p>Error {newOrdersError}</p>;
  setnewOrders(newOrdersData.subOrders);

  if (deliveredOrdersLoading) return <p>Loading...</p>;
  if (deliveredOrdersError) return <p>Error {deliveredOrdersError}</p>;
  setdeliveredOrders(deliveredOrdersData.subOrders);

  if (ordersOnDeliveryLoading) return <p>Loading...</p>;
  if (ordersOnDeliveryError) return <p>Error {ordersOnDeliveryError}</p>;
  setordersOnDelivery(ordersOnDeliveryData.subOrders);
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default withRouter(App);
