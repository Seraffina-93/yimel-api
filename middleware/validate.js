const { validate } = require('joi')

const validateSchema = (schema) => async (req, res, next) => {
  const { body, params } = schema

  try {
    body && (await validate(req.body, body(req.body)))
    params && (await validate(req.params, params(data.params)))

    return next()
  } catch (e) {
    res.status(400).send(e)
  }
}

module.exports = {
  validateSchema
}