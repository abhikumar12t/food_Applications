const mongoose = require('mongoose');
const validator = require("validator");

const resivationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [2, 'First name must be at least 2 characters long'],
    maxlength: [20, 'First name must be at most 20 characters long'],
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    minlength: [2, 'Last name must be at least 2 characters long'],
    maxlength: [20, 'Last name must be at most 20 characters long'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) { return validator.isEmail(v); },
      message: 'Please provide a valid email address'
    }
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, 'Phone number must contain 10 digits'],
    maxlength: [10, 'Phone number must contain 10 digits'],
    trim: true
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('resivation', resivationSchema);
