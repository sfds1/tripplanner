const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    CategoryCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      },
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
    activities: [{
      type: Schema.Types.ObjectId
    }]
  });

module.exports = model('Category', CategorySchema);
