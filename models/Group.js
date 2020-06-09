// Don't think we're using this anymore
// It has been combined with the trip schema

const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // Invitation link to room, may not be neccesary
  // invitation: {
  // type: String,
  // default: link, // random link generator if we are using links
  // unique: true,
  // },
  // posts: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Post',
  // }],
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  groupCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  // not sure if below is the right syntax for group creator and users in the group
  users: [{
    admin: false,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  event: {
    type: String,
  },
  // Invitation link to room, may not be neccesary
  invitation: {
    type: String,
    default: 'link', // random link generator if we are using links
    unique: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
  }],
  // users: [{
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //   }],
});

module.exports = model('Group', GroupSchema);
