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
}`;

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
      issueId
      title
      description
      state
      bounty

    }
  }
}`;

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
}`;

export const QUERY_GITHUBUSER = gql`
query GithubUsername($githubUsername: String!) {
  githubUsername(githubUsername: $githubUsername) {
    githubUsername
    _id
    firstName
    lastName
    email
  }
}`;

export const QUERY_BOUNTIES = gql`
query getBountyValues {
  issues {
    bounty
    issueId
    _id
  }
}`;



export const QUERY_ISSUES = gql`
query Query {
  issues {
    _id
    issueId
    title
    description
    state
    bounty
  }
}
`;

export const QUERY_MY_BOUNTIES = gql`
query Query {
  me {
    savedIssues {
      bounty
      title
      state
      issueId
    }
  }
}
`;