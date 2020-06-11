const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

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

UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};


UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return Promise.resolve(isMatch);
  } catch (e) {
    return Promise.reject(e);
  }
};

UserSchema.pre('save', async function (next) {
  // gets access to the user model that is currently being saved
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      // overwrite the plain text password with our hash
      user.password = hash;
      // Finally call save
      next();
    } catch (e) {
      // Call save with an error
      next(e);
    }
  }
  next();
});

module.exports = model('User', UserSchema);
