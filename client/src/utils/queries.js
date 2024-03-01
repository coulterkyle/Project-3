import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($Bounty: ID!) {
    checkout(Bounty: $Bounty) {
      session
    }
  }
`;