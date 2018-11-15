const Joi = require('joi')

const validateMessage = (message) => {
  return {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    message: Joi.string().required()
  }
}


const sendMessage = async (message) => {
  try {
    const mess2 = 'Mensaje enviado'

// {subject: req.body.subject, message: req.body.message, id_sender: req.body.id_sender, message_date: new Date()}, (err, result) => {

    resolve({ mess2 })
  } catch(e) {
    reject(e)
  }
}

module.exports = {
  sendMessage
}