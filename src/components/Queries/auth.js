import { gql } from 'apollo-boost';

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      adminId
    }
  }
`;

export const ADMIN_SIGN_UP = gql`
  mutation AdminSignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $employeeID: String!
    $position: String!
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      employeeID: $employeeID
      position: $position
    ) {
      _id
    }
  }
`;
export const ADMIN_PWD_RESET = gql`
  mutation AdminPwdReset(
    $email: String!
    $employeeID: String!
    $position: String!
  ) {
    signUp(email: $email, employeeID: $employeeID, position: $position) {
      _id
    }
  }
`;
