const { login } = require('./login.controller')

module.exports = (router) => {
  router.post('/login', async (req, res) => {
    try {
      const { body } = req
      const logged = await login(body)
      
      const status = 200
  
      res.status(status).send(logged)
    } catch(e) {
      res.status(400).send({ message: 'Error login' })
    }
  });
}