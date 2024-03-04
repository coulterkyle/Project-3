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
export const SAVE_ISSUE = gql`
mutation saveIssue(
  $issueId: String!, 
  $title: String!, 
  $description: String!, 
  $state: String!, 
  $bounty: Float) {
  saveIssue(issueId: $issueId, 
    title: $title, 
    description: $description, 
    state: $state, 
    bounty: $bounty) {
    _id
    issueId
    title
    description
    state
    bounty
  }
}
`;
export const REMOVE_ISSUE = gql`
mutation removeIssue($issueId: String!) {
  removeIssue(issueId: $issueId) {
    _id
  }
}
`;

export const ADD_VOTE = gql`
mutation addVote($issueId: ID!) {
  addVote(issueId: $issueId) {
    _id
    issueId
    title
    description
    state
    bounty
    voters {
      _id
    }
  }
}
`
export const REMOVE_VOTE = gql`
mutation removeVote($issueId: ID!) {
  removeVote(issueId: $issueId) {
    _id
    issueId
    title
    description
    state
    bounty
    voters {
      _id
    }
  }
}
`
export const ADD_BOUNTY = gql`
mutation addBounty($issueId: ID!, $bountyDollars: Float!) {
  addBounty(issueId: $issueId, bountyDollars: $bountyDollars) {
    _id
    issueId
    title
    description
    state
    bounty
  }
}
`