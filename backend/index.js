const express = require('express')

const app = express()

const port = 7777

//app.use()

app.get('/', (req, res) => {
    return res.send('hello world')
})

app.listen(port, (response) => {
    console.log(`logs do localhost:${port}~> ${response}`)
})
