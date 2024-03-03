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
  voters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  bounty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bounty'
    }
  ]
});

const Issue = model('Issue', issueSchema);

module.exports = Issue;


