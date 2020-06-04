const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
  },
  activities: [{
    type: Schema.Types.ObjectId,
    ref: 'Activity',
  }],
});

module.exports = model('Category', CategorySchema);
