<template>
  <div class="players">
    <div class="players-list">
      <div class="players-list__item misterx" :style="borderStyle(players.misterX.pawnColor)">
        <div class="players-list__item-content">
          <img :src="players.misterX.avatarUrl">
          <div class="tickets">
            <div class="tickets__item extra-double">
              <p class="tickets__item__caption">{{ players.misterX.tickets.extraDouble }}</p>
            </div>
            <div class="tickets__item secret">
              <p class="tickets__item__caption">{{ players.misterX.tickets.secret }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="players-list__item detective" v-for="detective in players.detectives" :key="detective.id"
           :style="borderStyle(detective.pawnColor)">
        <div class="players-list__item-content">
          <img :src="detective.avatarUrl">
          <div class="tickets">
            <div class="tickets__item taxi">
              <p class="tickets__item__caption">{{ detective.tickets.taxi }}</p>
            </div>
            <div class="tickets__item bus">
              <p class="tickets__item__caption">{{ detective.tickets.bus }}</p>
            </div>
            <div class="tickets__item metro">
              <p class="tickets__item__caption">{{ detective.tickets.metro }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gameMixin from '@/mixins/gameMixin'

  export default {
    name: 'room-players',
    mixins: [ gameMixin ],
    methods: {
      borderStyle (color) {
        return `border: 1px ${color} solid`
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/mixins"

  .players
    position: fixed
    right: 0
    top: 20%

    &-list__item
      text-align: left
      width: 260px
      height: 70px
      background: white
      border-top-left-radius: 35px
      border-bottom-left-radius: 35px
      @include box-shadow(2px, 2px, 10px, rgba(0,0,0,0.75))
      transform: translate(190px)
      transition: all .3s ease-out

      &:hover
        transform: translate(1px)

      &.misterx
        margin-bottom: 36px

      &.detective
        margin-bottom: 6px

      &-content
        display: inline-flex

      img
        display: inline-flex
        margin: 5px
        height: 60px
        width: 60px

    .tickets
      display: inline-flex

      .tickets__item
        margin: 5px 6px
        width: 50px
        height: 60px
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        text-align: center

        p
          color: white
          font-size: 32px
          margin-top: 10px
          font-weight: bold

        &.taxi
          background-color: #EFE235
        &.bus
          background-color: #1DB2CA
        &.metro
          background-color: #DF2A28
        &.extra-double
          background-color: #ac3e71
        &.secret
          background-color: black

</style>
