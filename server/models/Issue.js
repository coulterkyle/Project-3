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
  votes: {
    type: Number,
    min: 0,
    default: 0
  },
  voters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  bounty: {
    type: Number,
    min: 0,
    default: 0
  },
  bountyIssuers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Issue = model('Issue', issueSchema);

module.exports = Issue;


