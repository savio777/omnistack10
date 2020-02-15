const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStrArray')

module.exports = {

  async index(req, res) {
    console.log(req.method, req.path)

    const devs = await Dev.find({})

    return res.json(devs)
  },

  async store(req, res) {
    console.log(req.method, req.path)

    const { github_user, techs, latitude, longitude } = req.body

    const dev = await Dev.findOne({ github_user })

    if (dev) {
      return res.json(dev)
    }

    const response = await axios.get(`https://api.github.com/users/${github_user}`)

    const { name = login, avatar_url, bio } = response.data

    const listTechs = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    const devModel = await Dev.create({
      name,
      github_user,
      bio,
      avatar_url,
      techs: listTechs,
      location
    })

    return res.json(devModel)
  },

  async update(req, res) {
    console.log(req.method, req.path)

    const { github_user, techs, latitude, longitude } = req.body

    const dev = await Dev.findOne({ github_user })

    const listTechs = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    if (dev) {
      await Dev.deleteOne({
        _id: dev._id
      })

      dev.techs = listTechs
      dev.location = location

      await dev.save()
    }

    return res.json(dev)
  },

  async destroy(req, res) {
    console.log(req.method, req.path)

    const github_user = req.body.github_user

    const dev = await Dev.findOne({ github_user })

    if (dev) {
      await Dev.deleteOne({ _id: dev._id })
    }

    return res.json(dev)
  }
}