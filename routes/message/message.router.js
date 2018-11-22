const { sendMessage, schemaSendMessage } = require('./message.controller')
const isAuth = require('../../middleware/auth')
const { validateSchema } = require('../../middleware/validate')

module.exports = (router) => {
  router.post('/message', isAuth, validateSchema({ body: schemaSendMessage }), async (req, res) => {
    try {
      const { body } = req
      const message = await sendMessage(body)
      const status = 200
  
      res.status(status).send(message)
    } catch(e) {
      const { message, error } = e
      console.log(error)
      res.send(400, { message })
    }
  });
}
