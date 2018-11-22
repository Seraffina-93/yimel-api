const { sendMessage, schemaSendMessage, getAllMessages } = require('./message.controller')
const isAuth = require('../../middleware/auth')
const { validateSchema } = require('../../middleware/validate')
const { decodeToken } = require('../../utils/token')

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
  })

  router.get('/message/all', isAuth, async (req, res) => {
    try {
      const { authorization } = req.headers
      const token = authorization.split(' ')[1]
      const tokenDecoded = await decodeToken(token)
      const userId = tokenDecoded.sub

      const messages = await getAllMessages(userId)
      const status = 200
  
      res.status(status).send(messages)
    } catch(e) {
      const { message, error } = e
      console.log(error)
      res.send(400, { message })
    }
  })
}
