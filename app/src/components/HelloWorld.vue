<template xmlns="http://www.w3.org/1999/html">
  <div class="hello">
    <svg class="map">
      <g v-for="road in roads">
        <py-road :status="road.name" :coordinates="road.spots" :highlight="road.highlight"></py-road>
      </g>
      <g v-for="spot in spots" :key="spot.number">
        <py-spot :data="spot" v-on:selected="moveTo(spot)"></py-spot>
      </g>
      <py-pawn v-if="!isDetective" class="movable" :player="players.misterX"></py-pawn>
      <py-pawn :player="detective" class="movable" v-for="detective in players.detectives"
               :key="detective.name"></py-pawn>
    </svg>
    <py-chat v-if="showGameProgress"/>
    <py-roundcounter v-on:toggle="showGameProgress = !showGameProgress"/>
    <py-progress-panel v-if="showGameProgress"/>
    <div class="game-end" v-if="gameStopped">
      <div class="game-end-dialog">
        <h2>Koniec gry</h2>
        <h3>{{ endGameReason }}</h3>
        <div class="game-end-dialog__button">
          <md-button class="md-primary" @click="$router.go(-1)"> Wróć do lobby</md-button>
        </div>

      </div>
    </div>
    <py-room-data/>
    <py-room-players/>
    <div class="close-button">
      <md-button class="md-raised md-icon-button md-accent" v-on:click.native="$router.go(-1)"><md-icon>close</md-icon></md-button>
    </div>
    <md-snackbar md-position="top right" ref="snackbar" >
      <span>{{ snackbarMessage }}</span>
    </md-snackbar>
  </div>
</template>

<script>
  import gameMixin from '@/mixins/gameMixin'
  import Spot from '@/components/Spot'
  import Road from '@/components/Road'
  import Pawn from '@/components/Pawn'
  import RoundCounter from '@/components/RoundCounter'
  import ProgressPanel from '@/components/ProgressPanel'
  import RoomData from '@/components/RoomData'
  import RoomPlayers from '@/components/RoomPlayers'
  import EventBus from '../common/EventBus'
  import Chat from '@/components/ChatPanel'

  export default {
    name: 'HelloWorld',
    mixins: [ gameMixin ],
    components: {
      'py-spot': Spot,
      'py-road': Road,
      'py-pawn': Pawn,
      'py-chat': Chat,
      'py-progress-panel': ProgressPanel,
      'py-roundcounter': RoundCounter,
      'py-room-data': RoomData,
      'py-room-players': RoomPlayers
    },
    data () {
      return {
        showGameProgress: true,
        playerName: '',
        gameStopped: false,
        endGameReason: '',
        snackbarMessage: ''
      }
    },
    computed: {
      spots () {
        return this.$store.state.spots
      },
      roads () {
        return this.$store.state.roads
      },
      isDetective () {
        return this.$store.getters.isDetective
      }
    },
    methods: {
      moveTo (spot) {
        this.$store.dispatch('MOVE_PLAYER', spot)
      }
    },
    mounted () {
      EventBus.$on('STOP_GAME', (reason) => {
        this.gameStopped = true
        this.endGameReason = reason
      })
      EventBus.$on('NEW_PLAYER', (nickname) => {
        this.snackbarMessage = `${nickname.nickname} dołączył do gry!`
        this.$refs.snackbar.open()
      })
    },
    async created () {
      await this.$store.dispatch('INITIALIZE_GAME')
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/mixins"

  svg
    max-width: unset

  .map
    height: 1200px
    width: 1400px
    background: url('https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1.jpg')
    -webkit-background-size: cover
    background-size: cover


  .game-end
    position: fixed
    height: 100vh
    width: 100%
    background-color: rgba(255, 255, 255, .6)
    z-index: 99
    top: 0
    left: 0

    &-dialog
      z-index: 100
      background-color: white
      position: fixed
      width: 500px
      height: 200px
      top: 50%
      left: 50%
      margin-top: -100px
      margin-left: -250px
      border-top: 5px solid #1baac1
      @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))

      h2, h3
        color: #323232

      &__button
        position: absolute
        bottom: 0
        right: 0


  .close-button
    position: fixed
    top: 8px
    right: 8px


  .movable
    transition: all 2s ease
    -webkit-transition: all 2s ease
    -moz-transition: all 2s ease
    -ms-transition: all 2s ease
    -o-transition: all 2s ease

</style>
