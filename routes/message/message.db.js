const Message = require('../../models/message')
const User = require('../../models/user')

const insertMessage = async (data) => {
  try {
    const message = new Message(data)
    const messageCreated = await message.save()
    return messageCreated
  } catch(e) {
    throw e
  }
}

const findAll = async (emailFromId) => {
  try {
    const query = { emailFromId }
    const message = await Message.find(query)

    return message
  } catch(e) {
    throw e
  }
}

const findByEmail = async (email) => {
  try {
    const query = { email }
    const user = await User.findOne(query)

    return user
  } catch(e) {
    throw e
  }
}

module.exports = {
  insertMessage,
  findByEmail,
  findAll
}