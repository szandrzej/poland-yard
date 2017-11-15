import mock from './mock'
import rest from './rest'

export default {
  retrieveSpots: mock.retrieveSpots,
  retrieveSpotsConnections: mock.retrieveSpotsConnections,
  retrieveCurrentGames: rest.retrieveCurrentGames,
  retrieveGame: rest.retrieveGame,
  joinGame: rest.joinGame,
  addGame: rest.addGame
}
