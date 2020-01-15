const express = require('express')

const app = express()

const port = 7777

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.method, req.path)
    return res.json({
        message: 'hello world',
        query: req.query.name,
        body: req.body.test,
        header: req.headers.token_example
    })
})

app.post('/', (req, res) => {
    console.log(req.method, req.path)
    return res.json({
        message: 'hello world',
        query: req.query.name,
        body: req.body.test,
        header: req.headers.token_example
    })
})

app.put('/', (req, res) => {
    console.log(req.method, req.path)
    return res.json({
        message: 'hello world',
        query: req.query.name,
        body: req.body.test,
        header: req.headers.token_example
    })
})

app.delete('/', (req, res) => {
    console.log(req.method, req.path)
    return res.json({
        message: 'hello world',
        query: req.query.name,
        body: req.body.test,
        header: req.headers.token_example
    })
})


app.listen(port, () => {
    console.log(`logs do localhost:${port}`)
})
