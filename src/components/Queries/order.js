import { gql } from 'apollo-boost';

export const GET_ALL_ORDERS = gql`
  {
    orders {
      orders {
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
      totalOrders
    }
  }
`;
export const GET_NEW_ORDERS = gql`
  {
    subOrders(status: "pending") {
      orders {
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
      totalOrders
    }
  }
`;

export const GET_ON_DELIVERY_ORDERS = gql`
  {
    subOrders(status: "approved") {
      orders {
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
      totalOrders
    }
  }
`;

export const GET_DELIVERED_ORDERS = gql`
  {
    subOrders(status: "delivered") {
      orders {
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
      totalOrders
    }
  }
`;

export const GET_CANCELLED_ORDERS = gql`
  {
    subOrders(status: "cancelled") {
      orders {
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
      totalOrders
    }
  }
`;
