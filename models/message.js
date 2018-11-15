const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  subject: String,
  message: String,
  emailFromId: String,
  createdAt: { type: Date, default: Date.now },
  emailToId: [String],
}, {
  versionKey: false
})

module.exports = mongoose.model('message', MessageSchema)
