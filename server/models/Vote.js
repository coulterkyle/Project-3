const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema({
    issueId: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        required: true
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        required: true
      },
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
