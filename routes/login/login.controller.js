const { findUser } = require('./login.db')
const { createToken } = require('../../utils/token')
const md5 = require('md5')
const Joi = require('joi')

const schemaLogin = () => {
  return {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  }
}

const login = async (body) => {
  try {
    const password = md5(body.password)
    const { email } = body
    const data = {
      email,
      password
    }

    const userCreated = await findUser(data)
    if(!userCreated)
      throw 'Usuario no existe'

    const { _id } = userCreated

    const newToken = createToken(_id)
    const loginData = {
      token: newToken,
      email: userCreated.email
    }

    return loginData
  } catch(e) {
    throw e
  }
}

module.exports = {
  schemaLogin,
  login
}