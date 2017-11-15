<template>
  <g :transform="translatePawn()">
    <svg>
      <defs>
        <filter id="f3" x="-20%" y="-20%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0"/>
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1"/>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
        </filter>
      </defs>
      <g filter="url(#f3)">
        <path
          d="m25,1.1719c-3.4531,0-6.25,2.7969-6.25,6.25,0,1.3906,0.45312,2.6719,1.2188,3.7188-3.0469,1.75-5.125,5.0156-5.125,8.7812,0,3.1719,1.4688,6,3.7656,7.8594-4.688,1.657-11.579,8.672-11.579,21.047h35.938c0-12.375-6.8906-19.391-11.578-21.047,2.2969-1.8594,3.7656-4.6875,3.7656-7.8594,0-3.7656-2.0781-7.0312-5.125-8.7812,0.765-1.047,1.218-2.3285,1.218-3.7191,0-3.4531-2.7969-6.25-6.25-6.25z"
          stroke="black"
          :fill="player.pawnColor"/>
      </g>
    </svg>
  </g>
</template>

<script>
  export default {
    name: 'pawn',
    data () {
      return {}
    },
    props: {
      player: {
        type: Object,
        required: true
      }
    },
    methods: {
      translatePawn () {
        return `translate(${this.player.currentSpot.position.x}, ${this.player.currentSpot.position.y - 50})`
      }
    },
    computed: {
      isDetective () {
        return this.$store.getters.isDetective
      }
    },
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
