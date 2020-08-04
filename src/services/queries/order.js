import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation AddOrder(
    $senderName: String!
    $senderPhone: String!
    $recipientName: String!
    $recipientPhone: String!
    $itemName: String!
    $itemType: String!
    $itemCount: String!
    $price: String!
    $method: String!
    $startPt: String!
    $deliveryPt: String!
    $description: String
  ) {
    addOrder(
      senderName: $senderName
      senderPhone: $senderPhone
      recipientName: $recipientName
      recipientPhone: $recipientPhone
      itemName: $itemName
      itemType: $itemType
      itemCount: $itemCount
      price: $price
      method: $method
      startPt: $startPt
      deliveryPt: $deliveryPt
      description: $description
    ) {
      _id
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation CancelOrder($id: ID!) {
    cancelOrder(id: $id) {
      _id
    }
  }
`;

export const APPROVE_ORDER = gql`
  mutation ApproveOrder($id: ID!) {
    approveOrder(id: $id) {
      _id
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  query {
    orders {
      orders {
        _id
        orderNo
        item {
          itemName
          itemType
          itemCount
          description
        }
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        payment {
          price
          method
          status
        }
        shipping {
          startPt
          deliveryPt
        }
        orderStatus
        createdAt
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
        item {
          itemName
          itemType
          itemCount
          description
        }
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        payment {
          price
          method
          status
        }
        shipping {
          startPt
          deliveryPt
        }
        orderStatus
        createdAt
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
        item {
          itemName
          itemType
          itemCount
          description
        }
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        payment {
          price
          method
          status
        }
        shipping {
          startPt
          deliveryPt
        }
        orderStatus
        createdAt
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
        rider {
          _id
        }
        item {
          itemName
          itemType
          itemCount
          description
        }
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        payment {
          price
          method
          status
        }
        shipping {
          startPt
          deliveryPt
          dateDeliverd
          timeDelivered
        }
        orderStatus
        createdAt
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
        item {
          itemName
          itemType
          itemCount
          description
        }
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        payment {
          price
          method
          status
          date
        }
        shipping {
          startPt
          deliveryPt
        }
        orderStatus
        createdAt
      }
      totalOrders
    }
  }
`;

export const GET_ALL_PAYMENT = gql`
  {
    orders {
      orders {
        orderNo
        sender {
          senderName
        }
        payment {
          price
          method
          status
          date
        }
      }
    }
  }
`;

export const GET_RECEIVED_PAYMENT = gql`
  {
    paymentStatus(status: "received") {
      orders {
        orderNo
        sender {
          senderName
        }
        payment {
          price
          method
          status
          date
        }
      }
    }
  }
`;

export const GET_PENDING_PAYMENT = gql`
  {
    paymentStatus(status: "pending") {
      orders {
        orderNo
        sender {
          senderName
        }
        payment {
          price
          method
          status
          date
        }
      }
    }
  }
`;

export const GET_ALL_SHIPPINGS = gql`
  {
    orders {
      orders {
        orderNo
        sender {
          senderName
          senderPhone
        }
        recipient {
          recipientName
          recipientPhone
        }
        orderStatus
      }
    }
  }
`;

export const ASSIGN_RIDER = gql`
  mutation AssignRider($id: ID!, $riderID: String!) {
    assignRider(id: $id, riderID: $riderID) {
      orderNo
    }
  }
`;
