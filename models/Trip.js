const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TripSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  city : { 
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
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  users: [{
    admin: false,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
});

module.exports = model('Trip', TripSchema);
