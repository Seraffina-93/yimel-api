const { login, schemaLogin } = require('./login.controller')
const { validateSchema } = require('../../middleware/validate')

module.exports = (router) => {
  router.post('/login', validateSchema({ body: schemaLogin }), async (req, res) => {
    try {
      const { body } = req
      const logged = await login(body)
      
      const status = 200
  
      res.status(status).send(logged)
    } catch(e) {
      res.status(400).send({ message: 'Error login' })
    }
  })
}