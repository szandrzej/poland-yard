const express = require('express')
const router = express.Router()
const Session = require('../schema/Session')
const { lobby } = require('../ioio')

router.get('/', (req, res) => {
  const callback = (err, docs) => {
    const games = []
    docs.forEach(doc => {
      const players = playersCount(doc.game.players)
      games.push({
        id: doc._id,
        name: doc.name,
        round: doc.round,
        players: players,
        isStarted: doc.round > 0 && !(players < 6)
      })
    })
    res.send(games)
  }

  Session.find()
    .where({ isFinished: false })
    .sort({ round: 1 })
    .exec(callback)
})

router.get('/:id', (req, res) => {
  console.log(`x-header ${req.headers['x-player']}`)
  const callback = (err, doc) => {
    if (err) return res.sendStatus(404)
    res.send(doc)
  }

  Session.find({ _id: req.params.id })
    .exec(callback)
})

router.post('/', (req, res) => {
  const session = new Session({ name: makeid() })
  session.save(err => {
    if (err) return res.sendStatus(400)
    if (req.query.dashboard) {
      lobby('refresh_lobby', { refresh: true, origin: 'server' })
      return res.send({
        id: session._id,
        name: session.name,
        round: session.round,
        players: 0,
        isStarted: false
      })
    }
    return res.send(session)
  })
})


router.post('/:id/join', (req, res) => {
  Session.findOne({ _id: req.params.id, round: 0 })
    .exec((err, doc) => {
      let role
      if (err) {
        return res.sendStatus(404)
      }
      if (!req.body.player) {
        return res.sendStatus(400)
      }
      if ([ doc.game.players.misterX, ...doc.game.players.detectives ].find(x => x.name === req.body.player)) {
        return res.sendStatus(409)
      }
      if (!doc.game.players.misterX.name) {
        doc.game.players.misterX.name = req.body.player
        doc.game.players.misterX.avatarUrl = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png'
        doc.game.players.misterX.startSpot = selectStartMisterXSpot()
        doc.game.players.misterX.currentSpot = doc.game.players.misterX.startSpot
        role = 'misterx'
      } else {
        doc.game.players.detectives.push({
          name: req.body.player,
          tickets: {
            taxi: 11,
            bus: 8,
            metro: 4
          },
          currentSpot: selectStartSpot(doc.availableDetectiveSpots),
          pawnColor: selectPawnColor(doc.game.players.detectives.length),
          avatarUrl: selectAvatar(doc.game.players.detectives.length)
        })
        role = 'detective'
      }
      doc.save(err => {
        if (err) return res.sendStatus(400)
        lobby('refresh_lobby', { refresh: true, origin: 'server' })
        res.send({
          as: role
        })
      })
    })
})

module.exports = router

function makeid () {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text
}

function playersCount (players) {
  const isThereMisterX = players.misterX.name !== undefined
  return players.detectives.length + (isThereMisterX ? 1 : 0)
}

function selectPawnColor (count) {
  return [ 'red', 'green', 'blue', 'yellow', 'pink' ][ count ]
}

function selectAvatar (count) {
  return [
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png',
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png',
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png',
    'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
  ][ count ]
}

function selectStartMisterXSpot () {
  return [ 46, 45, 9, 20 ][ Math.floor(Math.random() * 4) ]
}

function selectStartSpot (spots) {
  const spot = spots[ Math.floor(Math.random() * spots.length) ]
  var i = spots.indexOf(spot)
  if (i != -1) {
    spots.splice(i, 1)
  }
  return spot
}