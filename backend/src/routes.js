const { Router } = require('express')

const routes = Router()

routes.post('/users', (req, res) => {
    console.log(req.method, req.path)
    return res.json({
        message: 'oi',
        name: req.body.name
    })
})

module.exports = routes
