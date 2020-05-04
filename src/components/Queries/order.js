import { gql } from 'apollo-boost';

export const CREATE_ORDER = gql`
  mutation AddOrder(
    $customerName: String!
    $customerPhone: String!
    $itemName: String!
    $itemType: String!
    $itemCount: String!
    $price: String!
    $startPt: String!
    $deliveryPt: String!
    $description: String!
  ) {
    addOrder(
      customerName: $customerName
      customerPhone: $customerPhone
      itemName: $itemName
      itemType: $itemType
      itemCount: $itemCount
      price: $price
      startPt: $startPt
      deliveryPt: $deliveryPt
      description: $description
    ) {
      _id
      customerName
      orderNo
      customerPhone
      itemName
      itemType
      itemCount
      price
      startPt
      deliveryPt
      description
      createdAt
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  {
    orders {
      orders {
        _id
        orderNo
        customerName
        customerPhone
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
        customerName
        customerPhone
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
        customerName
        customerPhone
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
        customerName
        customerPhone
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
        customerName
        customerPhone
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
