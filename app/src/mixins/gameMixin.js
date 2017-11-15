export default {
  methods: {
    isShowRound (index) {
      return [ 3, 8, 13, 18, 24 ].indexOf(index) !== -1
    }
  },
  computed: {
    currentGame () {
      return this.$store.state.currentGame
    },
    players () {
      return this.currentGame.game.players
    },
    myPlayer () {
      return this.$store.getters.userPlayer
    }
  }
}
