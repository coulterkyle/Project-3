import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query queryMe {
  me {
    _id
    firstName
    lastName
    email
    githubUsername
    savedIssues {
      _id
    }
  }
}
`;

export const QUERY_USER = gql`
query queryUser($userId: ID!) {
  user(userId: $userId) {
    _id
    firstName
    lastName
    email
    githubUsername
    savedIssues {
      _id
    }
  }
}
`;

export const QUERY_USERS = gql`
query queryUsers {
  users {
    _id
    firstName
    lastName
    email
    githubUsername
    savedIssues {
      _id
    }
  }
}
`;


