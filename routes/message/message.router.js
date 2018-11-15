const { sendMessage } = require('./message.controller')
const isAuth = require('../../middleware/auth')

module.exports = (router) => {
  router.post('/message', isAuth, async (req, res) => {
    try {
      const { body } = req
      // const message = await sendMessage(body)
      const message = { message: 'exito'}
      const status = 200
  
      res.status(status).send(message)
    } catch(e) {
      const { message, error } = e
      console.log(error)
      res.send(400, { message })
    }
  });
}
