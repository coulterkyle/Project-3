const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedIssues` array in User.js
const issueSchema = new Schema({

  // saved issue id from Github API
  issueId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  state: {
    type: String,
  },
});

module.exports = issueSchema;


