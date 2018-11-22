const Message = require('../../models/message')

const insertMessage = async (data) => {
  try {
    const message = new Message(data)
    const messageCreated = await message.save()
    return messageCreated
  } catch(e) {
    throw e
  }
}

module.exports = {
  insertMessage
}