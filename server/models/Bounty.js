const mongoose = require('mongoose');

const { Schema } = mongoose;

const bountySchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: 'Issue',
    required: true
  }
});

const Product = mongoose.model('Bounty', bountySchema);

module.exports = Bounty;