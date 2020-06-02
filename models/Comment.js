const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    details: {
      type: String,
      required: true,
    },
    commentCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      },
    activity: {
      type: Schema.Types.ObjectId,
      ref: 'activity',
    },
  });

module.exports = model('Comment', CommentSchema);
