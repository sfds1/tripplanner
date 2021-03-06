const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TripSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  location: {
    type: String,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

module.exports = model('Trip', TripSchema);
