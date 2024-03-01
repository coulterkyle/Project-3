const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    githubUsername: String!
    savedIssues: [Issue]
  }

  type Issue {
    _id: ID!
    issueId: String!
    title: String!
    description: String
    state: String
    votes: [Vote]
    bounty: [Bounty]
  }

  type Vote {
    _id: ID!
    issueId: String
    user: User
  }

  type Bounty {
    _id: ID!
    user: User!
    amount: Float
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    issues: [Issue]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, githubUsername: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, githubUsername: String!, email: String): User
    saveIssue(issueId: String!, title: String!, description: String, state: String): User
    removeIssue(issueId: String!): User
    addVote(issueId: String!): Issue
    addBounty(user: ID!, amount: Float): Issue
  }
`;

module.exports = typeDefs;
