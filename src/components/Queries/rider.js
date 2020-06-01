import { gql } from 'apollo-boost';

export const GET_ALL_RIDERS = gql`
  {
    riders {
      _id
      firstName
      lastName
      address
      address
      phone
      riderId
      orders {
        _id
        orderNo
      }
    }
  }
`;

export const GET_RIDER = gql``;

export const ADD_RIDER = gql`
  mutation AddRider(
    $firstName: String!
    $lastName: String!
    $address: String!
    $phone: String!
    $pin: String
  ) {
    addRider(
      firstName: $firstName
      lastName: $lastName
      address: $address
      phone: $phone
      pin: $pin
    ) {
      _id
      firstName
      lastName
      address
      phone
      riderId
      creator {
        _id
      }
      createdAt
    }
  }
`;
