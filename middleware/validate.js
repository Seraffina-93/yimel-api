const { validate } = require('joi')

const validateSchema = (schema) => async (req, res, next) => {
  const { body, params } = schema

  try {
    body && (await validate(req.body, body(req.body)))
    params && (await validate(req.params, params(data.params)))

    return next()
  } catch (e) {
    const keyError = e.details[0].path[0]
    res.status(400).send({ message: `Error en el campo ${keyError}` })
  }
}

module.exports = {
  validateSchema
}