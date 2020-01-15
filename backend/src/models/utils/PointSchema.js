const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  {
    timestamps: { createdAt: 'coords_create_at' }
  }
)

module.exports = PointSchema
