const express = require('express')

const app = express()

const port = 7777

//app.use()

app.get('/', (req, res) => {
    console.log(req.method, req.path)
    return res.json({ message: 'hello world' })
})

app.listen(port, () => {
    console.log(`logs do localhost:${port}`)
})
