const express = require('express')
const router = express.Router()
 
require('./user/user.router')(router)
require('./login/login.router')(router)
require('./message/message.router')(router)

module.exports = router
