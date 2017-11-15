import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
})

async function retrieveCurrentGames () {
  const result = await instance.get('/')
  if (result.status === 200) {
    return result.data
  } else {
    throw result.response.data
  }
}

async function retrieveGame (gameHash, player) {
  const result = await instance.get(`/${gameHash}`, {
    headers: {
      'x-player': player
    }
  })
  if (result.status === 200) {
    return result.data[0]
  } else {
    throw result.response.data
  }
}

async function joinGame (game, player) {
  const result = await instance.post(`/${game.id}/join`, { player: player })
  if (result.status === 200) {
    return result.data
  } else {
    throw result.response.data
  }
}

async function addGame () {
  const result = await instance.post('/?dashboard=true')
  if (result.status === 200) {
    return result.data
  } else {
    throw result.response.data
  }
}

export default {
  retrieveCurrentGames,
  joinGame,
  retrieveGame,
  addGame
}
