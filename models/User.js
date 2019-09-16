const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: Array
  },
  comments: {
    type: Array
  }
});

module.exports = User = mongoose.model('user', UserSchema);