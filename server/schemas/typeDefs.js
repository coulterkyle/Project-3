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
    votes: Int
    voters: [User]
    bounty: Float
    bountyIssuers: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user: User
    users: [User]
    issues: [Issue]
    issue(issueId: ID!): Issue
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, githubUsername: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveIssue(issueId: String!, title: String!, description: String!, state: String!): Issue
    removeIssue(issueId: String!): User
    addVote(issueId: ID!): Issue
    removeVote(issueId: ID!): Issue
  }
`;

module.exports = typeDefs;
