import { gql } from 'apollo-boost';

export const GET_NEW_ORDERS = gql`
  {
    subOrders(status: "pending") {
      _id
      orderNo
      customer
      itemName
      itemType
      itemCount
      price
      startPt
      deliveryPt
    }
  }
`;

export const GET_ON_DELIVERY_ORDERS = gql`
  {
    subOrders(status: "approved") {
      _id
      orderNo
      customer
      itemName
      itemType
      itemCount
      price
      startPt
      deliveryPt
    }
  }
`;

export const GET_DELIVERED_ORDERS = gql`
  {
    subOrders(status: "delivered") {
      _id
      orderNo
      customer
      itemName
      itemType
      itemCount
      price
      startPt
      deliveryPt
    }
  }
`;

export const GET_CANCELLED_ORDERS = gql`
  {
    subOrders(status: "cancelled") {
      _id
      orderNo
      customer
      itemName
      itemType
      itemCount
      price
      startPt
      deliveryPt
    }
  }
`;
