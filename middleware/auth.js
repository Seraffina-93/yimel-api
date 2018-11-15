const { decodeToken } = require('../utils/token')

const isAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers
  
    if(!authorization)
      return res.status(403).send({ message: 'No tienes autorizacion' })
  
    const token = authorization.split(' ')[1]
    await decodeToken(token)
  
    next()
  } catch(e) {
    const message = e.message ? e.message : 'Error al authentificar usuario'
    res.status(404).send({ message })
  }
}

module.exports = isAuth