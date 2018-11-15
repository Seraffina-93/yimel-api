const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  city: String,
  country: String,
  state: String,
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
}, {
  versionKey: false
})

module.exports = mongoose.model('user', UserSchema)
