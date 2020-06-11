const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments',
  }],
});

module.exports = model('Activity', ActivitySchema);
