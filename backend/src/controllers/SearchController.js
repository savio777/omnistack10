const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStrArray')

module.exports = {
  async index(req, res) {
    console.log(req.method, req.path)

    const { latitude, longitude, techs } = req.query

    const listTechs = parseStringAsArray(techs)

    //  filtros de pesquisa:
    //  lista de tecnologias;
    //  coordenadas proximas a um raio de no maximo 10km == 100000
    const devs = await Dev.find({
      techs: {
        $in: listTechs,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    })

    res.json(devs)
  }
}