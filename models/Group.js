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
  // not sure if below is the right syntax for group creator and users in the group
  users: [{
    admin: false,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
});

module.exports = model('Group', GroupSchema);
