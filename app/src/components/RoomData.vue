<template>
  <div class="game-name">
    <p class="game-name__text game-name__text--roomname">{{ currentGame.name }} ({{ currentGame._id }})</p>
    <p class="game-name__text game-name__text--player" :style="'color:' + myPlayer.pawnColor">Jako {{ myPlayer.name }}</p>
  </div>
</template>

<script>
  import gameMixin from '@/mixins/gameMixin'

  export default {
    name: 'room-data',
    mixins: [ gameMixin ]
  }
</script>

<style lang="sass" scoped>
  @import "../assets/mixins"

  .game-name
    position: fixed
    background-color: #fefefe
    top: 8px
    padding: 8px 12px
    @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))

    &__text
      margin: 0
      text-align: left
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 1)

      &--roomname
        font-size: 16px
        margin-bottom: 4px

      &--player
        font-size: 12px

</style>
