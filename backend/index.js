const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const { setupWebSocket } = require('./src/websocket')
const routes = require('./src/routes')

const app = express()

const server = http.Server(app)

setupWebSocket(server)

mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://127.0.0.1:27017/omnistack10', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const port = 7777

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  console.log(req.method, req.path)
  return res.json({ message: ':)' })
})

server.listen(port, () => {
  console.log(`logs do localhost:${port}`)
})
