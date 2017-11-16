<template>
  <div class="game-name">
    <svg class="game-name__pawn" viewBox="0 0 50 100" >
      <path
        d="m25,1.1719c-3.4531,0-6.25,2.7969-6.25,6.25,0,1.3906,0.45312,2.6719,1.2188,3.7188-3.0469,1.75-5.125,5.0156-5.125,8.7812,0,3.1719,1.4688,6,3.7656,7.8594-4.688,1.657-11.579,8.672-11.579,21.047h35.938c0-12.375-6.8906-19.391-11.578-21.047,2.2969-1.8594,3.7656-4.6875,3.7656-7.8594,0-3.7656-2.0781-7.0312-5.125-8.7812,0.765-1.047,1.218-2.3285,1.218-3.7191,0-3.4531-2.7969-6.25-6.25-6.25z"
        stroke="black"
        :fill="myPlayer.pawnColor"/>
    </svg>
    <div class="game-name__text-container">
      <p class="game-name__text game-name__text--roomname">{{ currentGame.name }} ({{ currentGame._id }})</p>
      <p class="game-name__text game-name__text--player" :style="'color:' + myPlayer.pawnColor">Jako {{ myPlayer.name }}</p>
    </div>
  </div>
</template>

<script>
  import gameMixin from '@/mixins/gameMixin'
  import Pawn from '@/components/Pawn'

  export default {
    name: 'room-data',
    components: {
      'py-pawn': Pawn
    },
    mixins: [ gameMixin ]
  }
</script>

<style lang="sass" scoped>
  @import "../assets/mixins"

  .game-name
    position: fixed
    background-color: #212121
    top: 8px
    padding: 8px 12px
    @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))

    &__pawn
      display: inline-block
      height: 40px
      width: 40px

    &__text-container
      display: inline-block
    &__text
      margin: 0
      text-align: left

      &--roomname
        color: #bbb
        font-size: 16px
        margin-bottom: 4px

      &--player
        font-size: 12px

</style>
