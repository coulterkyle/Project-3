import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser(
  $firstName: String!, 
  $lastName: String!, 
  $email: String!, 
  $password: String!) {
  addUser(
    firstName: $firstName, 
    lastName: $lastName, 
    email: $email, 
    password: $password) {
    token
    user {
      _id
    }
  }
}
`;

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

export const ADD_GITHUBUSERNAME = gql`
mutation addGithubUsername($githubUsername: String!) {
  addGithubUsername(githubUsername: $githubUsername) {
    firstName
    lastName
    email
    githubUsername
    _id
  }
}
`

export const SAVE_ISSUE = gql`
mutation SaveIssue(
  $issueId: String!, 
  $title: String!, 
  $state: String!, 
  $description: String, 
  $bounty: Float, 
  $bountyIssuer: ID) {
  saveIssue(issueId: $issueId, 
    title: $title, 
    state: $state, 
    description: $description, 
    bounty: $bounty, 
    bountyIssuer: $bountyIssuer) {
    _id
    issueId
    title
    description
    state
    bounty
    bountyIssuer {
      _id
    }
  }
}
`;

export const ADD_BOUNTY = gql`
mutation addBounty($issueId: ID!, $bountyDollars: Float!, $userId: ID!) {
  addBounty(issueId: $issueId, bountyDollars: $bountyDollars, userId: $userId) {
    _id
    issueId
    title
    description
    state
    bounty
    bountyIssuer {
      _id
    }
  }
}
`

export const REMOVE_ISSUE = gql`
mutation removeIssue($issueId: String!) {
  removeIssue(issueId: $issueId) {
    _id
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

export const decodeCHECKOUT = gql`
  mutation Mutation($sessionId: String!) {
    decodeStripe(sessionId: $sessionId) {
      total
    }
  }
`;