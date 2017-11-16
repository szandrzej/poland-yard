const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sessionSchema = new Schema({
  name: String,
  isFinished: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: false },
  round: { type: Number, default: 0, min: 0, max: 24 },
  misterXTurn: { type: Boolean, default: true },
  availableDetectiveSpots: {
    type: Array,
    default: [ 20, 32, 57, 18 ]
  },
  availableMisterXSpots: {
    type: Array,
    default: [ 46, 45, 9, 20 ]
  },
  chat: [
    {
      date: { type: Date, default: Date.now },
      message: String,
      sender: String
    }
  ],
  game: {
    players: {
      misterX: {
        name: { type: String },
        tickets: {
          extraDouble: { type: Number, default: 2 },
          secret: { type: Number, default: 5 }
        },
        lastKnownSpot: Number,
        pawnColor: { type: String, default: 'white' },
        avatarUrl: String,
        startSpot: Number,
        currentSpot: Number,
        progress: [
          {
            ticketType: { type: String },
            spot: Number
          }
        ]
      },
      detectives: [
        {
          name: { type: String },
          tickets: {
            taxi: { type: Number, default: 11 },
            bus: { type: Number, default: 8 },
            metro: { type: Number, default: 4 }
          },
          currentSpot: Number,
          pawnColor: String,
          avatarUrl: String,
          history: [
            {
              ticketType: { type: String },
              spot: Number
            }
          ]
        }
      ]
    }
  },
  created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Session', sessionSchema)