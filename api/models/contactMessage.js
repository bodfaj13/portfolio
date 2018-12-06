const mongoose = require('../config/mongoose')

var contactMessageSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sentAt: {
    type: String
  },
  markAsRead: {
    type: Boolean,
    default: false,
    require: true
  }
})

const contactMessage = mongoose.model('contactmessages', contactMessageSchema)
module.exports = contactMessage
