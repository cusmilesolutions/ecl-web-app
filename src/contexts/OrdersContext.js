import React, { createContext, useMemo, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  GET_ALL_ORDERS,
  GET_NEW_ORDERS,
  GET_CANCELLED_ORDERS,
  GET_DELIVERED_ORDERS,
  GET_ON_DELIVERY_ORDERS,
} from '../services/queries/order';

export const OrdersContext = createContext();

const OrdersContextProvider = ({ children }) => {
  const [allOrders, setallOrders] = useState({
    data: [],
    error: null,
    loading: null,
  });
  const [cancelledOrders, setcancelledOrders] = useState({
    data: [],
    error: null,
    loading: null,
  });
  const [deliveredOrders, setdeliveredOrders] = useState([]);
  const [approvedOrders, setapprovedOrders] = useState([]);

  // querying the orders data
  const {
    data: allOrdersData,
    error: allOrdersError,
    loading: allOrdersLoading,
  } = useQuery(GET_ALL_ORDERS);
  const { data: newOrdersData } = useQuery(GET_NEW_ORDERS);
  const { data: cancelledOrdersData } = useQuery(GET_CANCELLED_ORDERS);
  const { data: deliveredOrdersData } = useQuery(GET_DELIVERED_ORDERS);
  const { data: ordersOnDeliveryData } = useQuery(GET_ON_DELIVERY_ORDERS);

  //   useEffect(() => {
  //     allOrdersData
  //       ? setallOrders({ data: allOrdersData })
  //       : allOrdersLoading
  //       ? setallOrders({ loading: allOrdersLoading })
  //       : setallOrders({ error: allOrdersError });
  //     // if (allOrdersData) {
  //     //   setallOrders({data: allOrdersData});
  //     // }
  //     if (cancelledOrdersData) {
  //       setcancelledOrders(allOrdersData);
  //     }
  //   },[]);

  let values = useMemo(() => ({ allOrders, cancelledOrders }), [
    allOrders,
    cancelledOrders,
  ]);
  return (
    <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
