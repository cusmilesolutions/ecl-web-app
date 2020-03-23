import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

const OrdersContextProvider = props => {
  const [newOrders, setnewOrders] = useState([
    {
      _id: 'adfkajdfkjkaj',
      orderNo: 12345,
      customer: {
        name: 'Isaac',
        phone: '0541579060'
      },
      type: 'documents',
      itemName: 'American visa',
      itemCount: 2,
      price: 310,
      startPt: 'House 2, Adabraka',
      deliveryPt: 'TF Hostel, Legon'
    },
    {
      _id: 'adfkawdfkjkaj',
      orderNo: 12346,
      customer: {
        name: 'Emma',
        phone: '0541579060'
      },
      type: 'food',
      itemName: 'American visa',
      itemCount: 2,
      price: 310,
      startPt: 'House 3, Adabraka',
      deliveryPt: 'TF Hostel, Legon'
    }
  ]);
  const [cancelledOrders, setcancelledOrders] = useState([
    {
      _id: 'adfkajdfkjkaj',
      orderNo: 12345,
      customer: {
        name: 'Isaac',
        phone: '0541579060'
      },
      type: 'documents',
      itemName: 'American visa',
      itemCount: 2,
      price: 310,
      startPt: 'House 2, Adabraka',
      deliveryPt: 'TF Hostel, Legon'
    },
    {
      _id: 'adfkawdfkjkaj',
      orderNo: 12346,
      customer: {
        name: 'Emma',
        phone: '0541579060'
      },
      type: 'food',
      itemName: 'American visa',
      itemCount: 2,
      price: 310,
      startPt: 'House 3, Adabraka',
      deliveryPt: 'TF Hostel, Legon'
    }
  ]);
  const [ordersOnDelivery, setordersOnDelivery] = useState([
    {
      orderNo: '1234',
      pickUp: '12:33pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '012'
    },
    {
      orderNo: '1235',
      pickUp: '1:53pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '032'
    },
    {
      orderNo: '1236',
      pickUp: '8:13am',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '014'
    }
  ]);
  const [deliveredOrders, setdeliveredOrders] = useState([
    {
      orderNo: '1234',
      pickUp: '12:33pm',
      arrival: '1:53pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '012'
    },
    {
      orderNo: '1235',
      pickUp: '1:53pm',
      arrival: '1:53pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '032'
    },
    {
      orderNo: '1236',
      pickUp: '8:13am',
      arrival: '8:50am',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '014'
    }
  ]);

  let totalNewOrders = newOrders.length;
  let totalDeliveredOrders = deliveredOrders.length;
  let totalOrdersOnDelivery = ordersOnDelivery.length;
  let totalCancelledOrders = cancelledOrders.length;

  return (
    <OrdersContext.Provider
      value={{
        newOrders,
        cancelledOrders,
        ordersOnDelivery,
        deliveredOrders,
        totalNewOrders,
        totalDeliveredOrders,
        totalOrdersOnDelivery,
        totalCancelledOrders
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
