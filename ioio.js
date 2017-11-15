const Session = require('./schema/Session')

let io

module.exports = {
  lobby,
  initializeServer: function (socketIo) {
    io = socketIo.sockets
    io.on('connection', function (so) {
        let soName = 'Unknown'
        so.on('joinRoomReq', ({ roomName, nickname }) => {
          if (roomName) {
            console.log(nickname)
            soName = nickname
            so.join(roomName)
            so.broadcast.to(roomName).emit('newPlayer', { nickname })
          }
        })
        so.on('leaveRoomReq', ({ roomName }) => {
          const callback = (err, doc) => {
            if (err) return
            doc.isFinished = true
            doc.save((err) => {
              so.broadcast.to(roomName).emit('gameClosed', { reason: `Gracz ${soName} opuścił grę!` })
              lobby('refresh_lobby', { refresh: true, origin: 'server' })
              so.leave(roomName)
              console.log(`LEAVE ROOM ${roomName}`)
            })
          }
          Session.findOne({ _id: roomName })
            .exec(callback)
        })
        so.on('makeMove', ({ roomName, player, spot, ticketType }) => {
          const callback = (err, doc) => {
            if (err) return io.to(roomName).emit('error', 'nie ma takiej gry, lol')
            const result = findPlayer(doc.game.players, player)
            if (!result) return io.to(roomName).emit('error', 'nie ma takiego gracza, lol')
            if (result.isDetective) {
              if (doc.misterXTurn) return io.to(roomName).emit('error', 'to nie jest ruch detektywow') // bo nie jego tura
              if (result.player.history.length >= doc.round) return io.to(roomName).emit('error', 'ten gracz juz zrobil ruch') // bo najwyraźniej zrobił już ruch
              result.player.currentSpot = spot
              result.player.history.push({
                ticketType,
                spot
              })
              let tickets = result.player.tickets[ ticketType ]
              if (tickets && tickets > 0) {
                result.player.tickets[ ticketType ]--
              } else {
                return io.to(roomName).emit('error', 'brakuje ci biletów')
              }
              const otherDetectives = findOtherDetectives(doc.game.players, player)
              let canChangeTurn = true
              let i = 0
              while (canChangeTurn && i < otherDetectives.length) {
                if (otherDetectives[ i ].history.length < doc.round) canChangeTurn = false
                i++
              }
              doc.misterXTurn = canChangeTurn
            }
            else {
              if (!doc.misterXTurn) return io.to(roomName).emit('error', 'to nie jest tura misterxa')
              result.player.currentSpot = spot
              result.player.progress.push({
                ticketType,
                spot
              })
              doc.misterXTurn = false
              doc.round++
            }
            doc.save(err => {
              if (err) {
                console.log(err)
                return io.to(roomName).emit('error', 'cos przy zapisywaniu Session')
              }
              console.log(roomName)
              // io.emit('updateGame', {})
              io.to(roomName).emit('updateGame', {})
            })
          }

          Session.findOne({ _id: roomName })
            .exec(callback)
        })
      }
    )
  }
}

function lobby (event, payload) {
  console.log(event)
  io.emit(event, payload)
}

function findOtherDetectives (players, name) {
  return players.detectives.filter(x => x.name !== name)
}

function findPlayer (players, name) {
  if (players.misterX.name === name) {
    return { player: players.misterX, isDetective: false }
  } else {
    const player = players.detectives.find(x => x.name === name)
    return player ? { player, isDetective: true } : null
  }
}
