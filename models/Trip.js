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
  users: [{
    admin: false,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
});

module.exports = model('Trip', TripSchema);
