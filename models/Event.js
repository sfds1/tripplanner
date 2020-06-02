const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    name: {
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
    eventCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
    activities: [{
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    }]
  });

module.exports = model('Event', EventSchema);
