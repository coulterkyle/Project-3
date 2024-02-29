const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    savedIssues: [Issue]
  }

  type Issue {
    issueId: String!
    title: String
    state: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveIssue(issueId: String!, title: String, state: String): User
    removeIssue(issueId: String!): User
  }
`;

module.exports = typeDefs;
