function userPlayer (state) {
  if (!state.currentGame) return undefined
  return [ state.currentGame.game.players.misterX, ...state.currentGame.game.players.detectives ].find(x => x.name === state.defaultNickname)
}

function isDetective (state) {
  if (!state.currentGame) return false
  return state.currentGame.game.players.misterX.name !== userPlayer(state).name
}

function playerCount (state) {
  if (!state.currentGame) return 0
  return [ state.currentGame.game.players.misterX, ...state.currentGame.game.players.detectives ].length
}

function occupiedSpots (state) {
  if (!state.currentGame) return []
  const arr = []
  state.currentGame.game.players.detectives.forEach(x => {
    arr.push(x.currentSpot.number)
  })
  return arr
}

function canMakeNextMove (state) {
  if (!state.currentGame) return false
  if (state.currentGame.game.players.detectives.length < 1) return false
  if (!isDetective(state)) {
    return state.currentGame.misterXTurn
  } else {
    console.log(userPlayer(state).history.length)
    return userPlayer(state).history.length < state.currentGame.round
  }
}

export default {
  playerCount,
  userPlayer,
  isDetective,
  occupiedSpots,
  canMakeNextMove
}
