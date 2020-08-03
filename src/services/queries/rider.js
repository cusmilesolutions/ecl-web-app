import { gql } from '@apollo/client';

export const GET_ALL_RIDERS = gql`
  {
    riders {
      _id
      firstName
      lastName
      phone
      address
      riderId
      orders {
        _id
      }
    }
  }
`;

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
    }
  }
`;
