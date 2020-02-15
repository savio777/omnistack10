const express = require('express')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/omnistack10', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const port = 7777

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  console.log(req.method, req.path)
  return res.json({ message: ':)' })
})

app.listen(port, () => {
  console.log(`logs do localhost:${port}`)
})
