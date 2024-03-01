const mongoose = require('mongoose');

const { Schema } = mongoose;

const bountySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    amount: {
        type: Number,
    }
});

const Bounty = mongoose.model('Bounty', bountySchema);

module.exports = Bounty;
