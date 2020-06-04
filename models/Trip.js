const { Schema, model } = require('mongoose');

const TripSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  location: {
    type: String,
  },
  tripCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
});

module.exports = model('Trip', TripSchema);
