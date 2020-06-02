const { Schema, model } = require('mongoose');

const ActivitySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    details: {
      type: String,
    },
    yesVote: {
      type: Number,
    },
    noVote: {
      type: Number,
    },
    activityCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      },
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
    comments: [{
      type: Schema.Types.ObjectId,

    }]
  });

module.exports = model('Activity', ActivitySchema);
