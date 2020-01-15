const mongoose = require('mongoose')

const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    github_user: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    avatar_url: {
      type: String,
      required: true
    },
    techs: {
      type: [String],
      required: true
    },
    location: {
      type: PointSchema,
      index: '2dsphere'
    }
  },
  {
    timestamps: { createdAt: 'create_at' }
  }
)

module.exports = mongoose.model('Dev', DevSchema)
