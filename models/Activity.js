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
