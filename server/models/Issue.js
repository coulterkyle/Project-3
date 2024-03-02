const mongoose = require('mongoose');

const { Schema } = mongoose;

const issueSchema = new Schema({
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
  },
  bountyIssuers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;


