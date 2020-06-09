const { Schema, model } = require('mongoose');
const { isEmail, isLength } = require('validator');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
  },
  name: {
    type: String,
    // required: [true, 'You must provide a name'],
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  trips: [{
    admin: false,
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'Trip',
    },
  }],
  categoriesCreated: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  activities: [{
    admin: false,
    activity: {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  }],
  comments: [{
    admin: false,
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  }],
});

module.exports = model('User', UserSchema);
