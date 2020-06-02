const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {
      type: String,
      unique: true,
    //   validate: [isEmail, 'Please enter a valid email address'],
      required: [true, 'You must provide an email address'],
    },
    password: {
      type: String,
      required: [true, 'You must provide a password'],
      validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
    },
    name: {
      type: String,
      required:[true, 'You must provide a name'],
    },
    avatar: {
      type: Object // Depends on the avatar api
    },
    friends: [{
      type: String
    }],
    groups: [{
      type: Schema.Types.ObjectId,
      ref: 'Group',
    }],
    groupsCreated: [{
      type: Schema.Types.ObjectId,
      ref: 'Group',
    }],
    events: [{
      type: Schema.Types.ObjectId,
      ref: 'Events'
    }],
    activites: [{
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  });

  module.exports = model('User', UserSchema);
