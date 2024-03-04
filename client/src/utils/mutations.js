import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const stripeCHECKOUT = gql`
  mutation checkout($itemId: String!, $itemName: String!, $itemAmount: Float!) {
    checkout(itemId: $itemId, itemName: $itemName, itemAmount: $itemAmount) {
      session
    }
  }
`;

export const ADD_USER = gql`
mutation addUser(
  $firstName: String!, 
  $lastName: String!, 
  $githubUsername: String!, 
  $email: String!, 
  $password: String!) {
  addUser(
    firstName: $firstName, 
    lastName: $lastName, 
    githubUsername: $githubUsername, 
    email: $email, 
    password: $password) {
    token
    user {
      _id
    }
  }
}
`;
