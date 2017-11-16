<template xmlns="http://www.w3.org/1999/html">
  <div>
    <md-snackbar md-position="top right" ref="snackbar">
    <span>{{ snackbarMessage }}</span>
    </md-snackbar>
    <md-layout md-gutter>
      <md-layout md-flex-large="90" md-flex md-flex-offset-large="5">
        <h1 class="md-display-2 text-center">Poland Yard</h1>

        <md-input-container :class="playerName === '' ? 'md-input-invalid' : ''">
          <label>Nick</label>
          <md-input v-model="playerName" placeholder="Twój nick"></md-input>
        </md-input-container>

        <md-table class="games-list">
          <md-table-header>
            <md-table-row>
              <md-table-head>ID</md-table-head>
              <md-table-head class="text-center">Graczy</md-table-head>
              <md-table-head class="text-right">Runda</md-table-head>
              <md-table-head class="text-center">Graj?</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="game in games" :key="game.id">
              <md-table-cell class="text-left"><span class="games-list__text-normal">{{game.name}}</span>
                <span class="games-list__text-alpha"> ({{ game.id }})</span></md-table-cell>
              <md-table-cell class="text-center">{{ game.players }}</md-table-cell>
              <md-table-cell class="text-right">{{ game.round }}/24</md-table-cell>
              <md-table-cell class="text-center">
                <md-button class="md-raised md-primary all-width" @click="joinGame(game)"
                           :disabled="game.players >=6 || game.isStarted">Graj
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
        <md-button class="md-raised md-accent" @click="addGame()">Dodaj</md-button>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'Lobby',
    data () {
      return {
        playerName: 'Rojber',
        snackbarMessage: ''
      }
    },
    computed: {
      games () {
        return this.$store.state.currentGames
      }
    },
    methods: {
      async joinGame (game) {
        if (this.playerName !== '') {
          try {
            await this.$store.dispatch('JOIN_GAME', { game: game, player: this.playerName })
            this.$router.push('game')
          } catch (ex) {
            if (ex.response.status === 409) {
              this.snackbarMessage = `Użytkownik ${this.playerName} gra już przy tym stole. Zmień nick!`
            } else {
              this.snackbarMessage = `Nie udało się dołączyć do tego stołu. Spróbuj z innym!`
            }
            this.$refs.snackbar.open()
          }
        }
      },
      async addGame () {
        await this.$store.dispatch('ADD_GAME')
      }
    },
    async created () {
      await this.$store.dispatch('INITIALIZE_LOBBY')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .games-list
    width: 100%
    .games-list__text-normal
      font-weight: bold
      color: #000000
    .games-list__text-alpha
      color: rgba(0, 0, 0, .3)
    .md-button
      width: 100%

    .text-left
      text-align: left

    .text-center
      text-align: center

    .text-right
      text-align: right

  .all-width
    width: 100% !important

</style>
