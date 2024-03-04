const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    githubUsername: String!
    savedIssues: [Issue]
  }

  type Issue {
    _id: ID
    issueId: String
    title: String
    description: String
    state: String
    voters: [User]
    bounty: [Bounty]
  }

  type Bounty {
    _id: ID
    bountyDollars: Float
    bountyIssuer: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    user: User
    users: [User]
    issues: [Issue]
    issue(issueId: ID!): Issue
    bounties: [Bounty]
    bounty(issueId: ID!): Bounty
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, githubUsername: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveIssue(issueId: String!, title: String!, description: String!, state: String!): Issue
    removeIssue(issueId: String!): User
    addVote(issueId: ID!): Issue
    removeVote(issueId: ID!): Issue
    addBounty(issueId: ID!, bountyDollars: Float!): Bounty
    checkout(itemId: String!, itemName: String!, itemAmount: Float!): Checkout
  }
`;

module.exports = typeDefs;
