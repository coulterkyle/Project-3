const mongoose = require('mongoose');

const { Schema } = mongoose;

const Vote = require('./Vote');
const Bounty = require('./Bounty');

const issueSchema = new Schema({
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  issueId: {
    type: String,
    required: true,
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
  votes: [Vote.schema],
  bounty: [Bounty.schema],
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;

