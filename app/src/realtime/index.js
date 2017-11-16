import store from '../store'
import io from 'socket.io-client'

let socket

export default {
  initialize () {
    console.log('Initialized')
    socket = io('https://poland-yard.herokuapp.com')
    // socket = io('http://localhost:3000')
    socket.on('connect', () => {
      console.log('Connected')
    })
    socket.on('refresh_lobby', (data) => {
      console.log('refresh_lobby_event')
      store.dispatch('REFRESH_CURRENT_GAMES')
    })
    socket.on('newPlayer', (nickname) => {
      store.dispatch('UPDATE_GAME')
      store.dispatch('NEW_PLAYER', nickname)
    })
    socket.on('updateGame', () => {
      console.log('update_game')
      store.dispatch('UPDATE_GAME')
    })
    socket.on('gameClosed', ({ reason }) => {
      store.dispatch('STOP_GAME', reason)
    })
    socket.on('finishGame', (prompt) => {
      store.dispatch('FINISH_GAME', prompt)
    })
    socket.on('pingololo', (data) => {
      console.log(`PING from ${data.roomName}`)
    })
    socket.on('disconnected', () => {
      console.log('Disconnected')
    })
    socket.on('error', (data) => {
      console.log(data)
    })
  },
  join (roomName, player) {
    console.log(roomName)
    console.log(player)
    socket.emit('joinRoomReq', { roomName, nickname: player })
  },
  leave (roomName) {
    socket.emit('leaveRoomReq', { roomName })
  },
  makeMove (roomName, player, spot, type) {
    console.log(roomName)
    socket.emit('makeMove', { roomName, player, spot: spot.number, ticketType: type })
  },
  sendMessage (roomName, sender, message) {
    socket.emit('sendMessage', { roomName, sender, message })
  }
}
