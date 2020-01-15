const express = require('express')

const app = express()

const port = 7777

//app.use()

app.get('/', (req, res) => {
    console.log(req.method, req.path)
    return res.send('hello world')
})

app.listen(port, () => {
    console.log(`logs do localhost:${port}`)
})
