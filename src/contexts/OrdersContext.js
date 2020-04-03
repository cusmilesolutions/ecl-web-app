import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

const OrdersContextProvider = props => {
  const [newOrders, setnewOrders] = useState([]);
  const [cancelledOrders, setcancelledOrders] = useState([]);
  const [ordersOnDelivery, setordersOnDelivery] = useState([]);
  const [deliveredOrders, setdeliveredOrders] = useState([]);

  let totalNewOrders = newOrders.length;
  let totalDeliveredOrders = deliveredOrders.length;
  let totalOrdersOnDelivery = ordersOnDelivery.length;
  let totalCancelledOrders = cancelledOrders.length;
  let totalOrders =
    totalNewOrders +
    totalDeliveredOrders +
    totalOrdersOnDelivery +
    totalCancelledOrders;

  return (
    <OrdersContext.Provider
      value={{
        newOrders,
        setnewOrders,
        cancelledOrders,
        setcancelledOrders,
        ordersOnDelivery,
        setordersOnDelivery,
        deliveredOrders,
        setdeliveredOrders,
        totalNewOrders,
        totalDeliveredOrders,
        totalOrdersOnDelivery,
        totalCancelledOrders,
        totalOrders
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
