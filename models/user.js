const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true,"No Name"]
  },
  address: {
    type: String
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true

  }
})

module.exports = User = mongoose.model('users', UserSchema)
