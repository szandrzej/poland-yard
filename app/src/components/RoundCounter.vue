<template>
  <div class="dashboard__round-display">
    <div class="dashboard__round-display__counter" @click="$emit('toggle')">
      <p><span class="big">{{ round }}</span><span>/24</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'roundcounter',
    data () {
      return {}
    },
    computed: {
      round () {
        return this.$store.state.currentGame.round
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/mixins"

  .dashboard__round-display
    position: fixed
    right: 8px
    bottom: 8px

    &__counter
      cursor: pointer
      background-color: white
      border-radius: 100%
      padding: 4px 12px
      @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))

      p
        position: relative

        span
          font-size: 12px
          font-weight: normal

          &.big
            font-size: 24px
            font-weight: bold
</style>
