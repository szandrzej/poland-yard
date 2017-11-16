<template>
  <div class="dashboard__progress">
    <div class="dashboard__progress__container">
      <div v-for="(prog, i) in progress" :key="i"
           :class="[isShowRound(i + 1) ? 'dashboard__progress__cell wider' : 'dashboard__progress__cell', prog.ticketType]">
        <p v-if="!isShowRound(i + 1) || prog.spot === undefined" class="transparent≥/;">{{ i + 1 }}</p>
        <p v-else>{{ prog.spot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import gameMixin from '@/mixins/gameMixin'

  export default {
    name: 'progress_panel',
    mixins: [ gameMixin ],
    computed: {
      progress () {
        console.log(this.players)
        const prog = []
        for (let i = 0; i < 24; i++) {
          if (i < this.players.misterX.progress.length) {
            prog.push(this.players.misterX.progress[ i ])
            continue
          }
          prog.push({
            ticketType: 'none'
          })
        }
        return prog
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/mixins"

  .dashboard__progress
    position: fixed
    height: 60px
    width: calc(70% - 88px)
    background-color: #212121
    right: 80px
    bottom: 8px
    border-radius: 30px
    @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))
    overflow: auto

    .dashboard__progress__container
      width: 1590px

    .dashboard__progress__cell
      display: inline-flex
      background-color: #383838
      border-radius: 25px
      margin: 5px
      min-width: 50px
      min-height: 50px

      &.wider
        min-width: 80px

      &.taxi
        background-color: #EFE235

      &.bus
        background-color: #1DB2CA

      &.metro
        background-color: #DF2A28

      &.secret
        background-color: black
      p
        width: 100%
        color: #bbb
        font-size: 24px
        font-weight: bold
        margin-top: 14px
        margin-bottom: 0px

        &.transparent
          color: rgba(200, 200, 200, .2)
</style>
