const { Schema, model } = require('mongoose');

const bountySchema = new Schema({
  bountyDollars: {
    type: Number,
  },
  bountyIssuer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Bounty = model('Bounty', bountySchema);

module.exports = Bounty;
