const jwt = require('jwt-simple')
const moment = require('moment')
const { SECRET_TOKEN } = require('../config.json')

const createToken = (_id) => {
  const payload = {
    sub: _id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix(),
  }

  return jwt.encode(payload, SECRET_TOKEN)
}

const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.decode(token, SECRET_TOKEN)
      resolve()
    } catch(e) {
      reject({ message: 'El token ha expirado' })
    }
  })
}

module.exports = {
  createToken,
  decodeToken
}