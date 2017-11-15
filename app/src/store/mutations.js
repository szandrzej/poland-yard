import Vue from 'vue'

function getSpot (state, spotNumber) {
  return state.spots.find(x => x.number === spotNumber)
}

export default {
  START_WITH_PERSISTENT_DATA (state) {
    // Vue.set(state, 'defaultNickname', Vue.cookie.get('defaultNickname'))
  },
  SET_SPOTS (state, spots) {
    Vue.set(state, 'spots', spots)
  },
  SET_ROADS (state, roads) {
    roads.forEach(road => {
      const first = getSpot(state, road.spots[ 0 ]).position
      const second = getSpot(state, road.spots[ 1 ]).position
      road.spots = [ first, second ]
      road.highlight = false
    })
    Vue.set(state, 'roads', roads)
  },
  CHANGE_SPOT (state, spot) {
    Vue.set(state.players.detectives[ 2 ], 'currentSpot', spot)
  },
  CLEAR_GAME (state) {
    Vue.set(state, 'currentGame', undefined)
  },
  SET_CURRENT_GAMES (state, games) {
    Vue.set(state, 'currentGames', games)
  },
  SET_CURRENT_GAME (state, game) {
    Vue.set(state, 'currentGame', game)
    if (state.currentGame.game.players.misterX.startSpot) {
      state.currentGame.game.players.misterX.startSpot = getSpot(state, state.currentGame.game.players.misterX.startSpot)
      state.currentGame.game.players.misterX.currentSpot = getSpot(state, state.currentGame.game.players.misterX.currentSpot)
    }
    state.currentGame.game.players.detectives.forEach(det => {
      const spot = getSpot(state, det.currentSpot)
      det.currentSpot = spot
    })
  },
  SET_DEFAULT_NICK (state, nick) {
    Vue.set(state, 'defaultNickname', nick)
  },
  ADD_GAME (state, game) {
    state.currentGames.push(game)
  }
}
