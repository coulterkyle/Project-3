const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    githubUsername: String
    savedIssues: [Issue]
  }

  type Issue {
    _id: ID
    issueId: String
    title: String
    description: String
    state: String
    bounty: Float
    bountyIssuer: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Decoder {
    total: String
  }

  type Query {
    me: User
    user(userId: ID!): User
    githubUser(githubUsername: String!): User
    users: [User]
    issues: [Issue]
    issue(issueId: ID!): Issue
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveIssue(issueId: String!, title: String!, description: String, state: String!, bounty: Float, bountyIssuer: ID): Issue
    removeIssue(issueId: String!): User
    checkout(itemId: String!, itemName: String!, itemAmount: Float!): Checkout
    addBounty(issueId: ID!, bountyDollars: Float!, userId: ID!): Issue
    decodeStripe(sessionId: String!): Decoder
    addGithubUsername(githubUsername: String!): User
  }
`;

module.exports = typeDefs;
