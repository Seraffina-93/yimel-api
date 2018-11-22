const Joi = require('joi')
const { ObjectID } = require('mongodb')
const { insertMessage, findByEmail, findAll } = require('./message.db')

const schemaSendMessage = () => {
  return {
    subject: Joi.string().required(),
    message: Joi.string().required(),
    emailFromId: Joi.string().required(),
    emailTo: Joi.string(),
  }
}

const sendMessage = async (message, userId) => {
  try {
    message.emailFromId = await new ObjectID(userId)

    const userTo = await findByEmail(message.emailTo)
    message.emailToId = userTo._id
    
    delete message['emailTo'];
    await insertMessage(message)

    return { message: 'Mensaje enviado'}
  } catch(e) {
    throw e
  }
}

const getAllMessages = async (userId) => {
  try {
    const messages = await findAll(userId)

    return messages
  } catch(e) {
    throw e
  }
}

module.exports = {
  sendMessage,
  schemaSendMessage,
  getAllMessages
}