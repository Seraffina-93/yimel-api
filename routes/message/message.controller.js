const Joi = require('joi')
const { ObjectID } = require('mongodb')
const { insertMessage } = require('./message.db')

const schemaSendMessage = () => {
  return {
    subject: Joi.string().required(),
    message: Joi.string().required(),
    emailFromId: Joi.string().required(),
    emailToId: Joi.array(),
  }
}

const sendMessage = async (message) => {
  try {
    message.emailFromId = await new ObjectID(message.emailFromId)
    
    message.emailToId = message.emailToId.map((data) => {
      return new ObjectID(data)
    })
    console.log('message: ', message)
    await insertMessage(message)

    return { message: 'Mensaje enviado'}
  } catch(e) {
    throw e
  }
}

module.exports = {
  sendMessage,
  schemaSendMessage
}