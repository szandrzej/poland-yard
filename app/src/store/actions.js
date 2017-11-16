import api from '../api'
import realtime from '../realtime'
import EventBus from '../common/EventBus'

export default {
  async INITIALIZE_LOBBY ({ commit, state }) {
    commit('SET_SPOTS', await api.retrieveSpots())
    commit('SET_ROADS', await api.retrieveSpotsConnections())
    commit('SET_CURRENT_GAMES', await api.retrieveCurrentGames())
    commit('START_WITH_PERSISTENT_DATA')
  },
  INITIALIZE_GAME ({ commit, state }) {
    if (state.currentGame) {
      realtime.join(state.currentGame._id, state.defaultNickname)
    }
  },
  async REFRESH_CURRENT_GAMES ({ commit }) {
    commit('SET_CURRENT_GAMES', await api.retrieveCurrentGames())
  },
  SHAKE_PLAYERS ({ commit, state, getters }) {
  },
  MOVE_PLAYER ({ commit, state, getters }, spot) {
    const currentSpot = getters.userPlayer.currentSpot
    return new Promise((resolve, reject) => {
      if (verifyMovement(currentSpot, getters.occupiedSpots, spot) && getters.canMakeNextMove) {
        // commit('CHANGE_SPOT', spot)
        const type = currentSpot.possibleRoute.find(x => x.spot === spot.number).type
        console.log('Będzie ruch!')
        realtime.makeMove(state.currentGame._id, getters.userPlayer.name, spot, type)
        resolve()
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject()
      }
    })
  },
  NEW_PLAYER ({ commit }, newPlayer) {
    EventBus.$emit('NEW_PLAYER', newPlayer)
  },
  CLEAR_GAME ({ commit }) {
    commit('CLEAR_GAME')
  },
  STOP_GAME ({ commit, state }, reason) {
    // commit('STOP_GAME', data)
    EventBus.$emit('STOP_GAME', reason)
  },
  FINISH_GAME ({ commit, state }, reason) {
    // commit('STOP_GAME', data)
    EventBus.$emit('STOP_GAME', reason)
  },
  JOIN_GAME ({ commit }, { game, player }) {
    return new Promise(async (resolve, reject) => {
      try {
        const role = await api.joinGame(game, player)
        commit('SET_DEFAULT_NICK', player)
        commit('SET_CURRENT_GAME', await api.retrieveGame(game.id, player))
        resolve(role)
      } catch (ex) {
        reject(ex)
      }
    })
  },
  async UPDATE_GAME ({ commit, state, getters }) {
    if (state.currentGame) {
      commit('SET_CURRENT_GAME', await api.retrieveGame(state.currentGame._id, getters.userPlayer.name))
    }
  },
  async ADD_GAME ({ commit }) {
    commit('ADD_GAME', await api.addGame())
  }
}

function verifyMovement (currentSpot, occupiedSpots, spot) {
  console.log(currentSpot.possibleRoute.filter(x => x.spot === spot.number))
  return currentSpot.possibleRoute.filter(x => x.spot === spot.number) && occupiedSpots.indexOf(spot.number) === -1
}
