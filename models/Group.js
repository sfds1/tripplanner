const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    event: {
        type: String,
    },
    // Invitation link to room, may not be neccesary
    invitation: {
      type: String,
      default: "link", // random link generator if we are using links
      unique: true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
      }],
    dateCreated: {
      type: Date,
      default: Date.now(),
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
      }],
  });

module.exports = model('Group', GroupSchema);
