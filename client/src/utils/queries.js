import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    user {
      _id
      firstName
      lastName
      githubUsername
    }
  }
`;