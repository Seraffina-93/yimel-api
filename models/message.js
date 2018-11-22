const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const MessageSchema = new Schema({
  subject: String,
  message: String,
  emailFromId: ObjectId,
  createdAt: { type: Date, default: Date.now },
  emailToId: [ObjectId],
}, {
  versionKey: false
})

module.exports = mongoose.model('message', MessageSchema)
