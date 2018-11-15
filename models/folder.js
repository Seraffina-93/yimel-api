const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FolderSchema = new Schema({
  name: String,
  userId: String,
  messageId: [String],
  createdAt: { type: Date, default: Date.now },
}, {
  versionKey: false
})

module.exports = mongoose.model('folder', FolderSchema)
