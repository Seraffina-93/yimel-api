const express = require('express')
const mongoose = require('mongoose')
const bodyParser  = require('body-parser')

const app = express()

//Conexión a la base de datos
mongoose.connect('mongodb://localhost/email-db')
  .then(db => console.log('Conexión a DB establecida'))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${req.method} ${req.url} - ${ms}ms`)
})

const cors = require('cors')

app.use(cors())

// Importación de las rutas
const indexRoutes = require('./routes/index')

// Middlewares
app.use(express.urlencoded({extended: false}))

// Rutas
app.use('/', indexRoutes)

// Inicio del servidor
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}/`)
})
