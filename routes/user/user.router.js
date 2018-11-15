const { insertUser } = require('./user.controller')

module.exports = (router) => {
  router.post('/user', async (req, res) => {
    try {
      const { body } = req
      const data = await insertUser(body)
      
      const status = 200
  
      res.status(status).send(data)
    } catch(e) {
      const { message, error } = e
      res.send(400, { message })
    }
  });
}
