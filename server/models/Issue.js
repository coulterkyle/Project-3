const { Schema, model } = require('mongoose');

const issueSchema = new Schema({
  issueId: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  state: {
    type: String,
  },
  bounty: {
    type: Number,
  },
  bountyIssuer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Issue = model('Issue', issueSchema);

module.exports = Issue;


