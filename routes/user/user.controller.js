const { insert, findByEmail } = require('./user.db')
const md5 = require('md5')

const insertUser = async (body) => {
  try {
    const { email } = body
    const userExist = await findByEmail(email)

    if(userExist)
      throw { message: 'El usuario ya existe', error: null }

    const password = { password: md5(body.password)}
    await insert({ ...body, ...password })
    const message = 'El usuario fue creado con exito'

    return { message }
  } catch(error) {
    const message = error.message ? error.message : 'Error al crear usuario'
    throw { message, error }
  }
}

module.exports = {
  insertUser,
}