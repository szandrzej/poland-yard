<template>
    <svg>
      <defs>
        <filter id="f2" x="-20%" y="-20%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0"/>
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1"/>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
        </filter>
      </defs>
      <g filter="url(#f2)" class="animable">
        <path :d="preparePath" :stroke="roadColor" fill="transparent" :stroke-dasharray="roadStroke"
              :stroke-width="highlight ? 12 : 4"/>
      </g>
    </svg>
</template>

<script>
  import { TAXI, BUS, METRO } from '../common/mapConfig'

  export default {
    name: 'road',
    data () {
      return {}
    },
    props: {
      status: {
        type: String,
        required: true,
        validator: value => {
          return [TAXI.NAME, BUS.NAME, METRO.NAME].indexOf(value) !== -1
        }
      },
      coordinates: {
        type: Array,
        required: true
      },
      highlight: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      preparePath () {
        return `M ${this.coordinates[0].x + 26 + (this.status === METRO.NAME ? 10 : 0)} ${this.coordinates[0].y + 26} q ${this.getRoadSinusoity()} ${this.getRoadSinusoity()} ${this.coordinates[1].x - this.coordinates[0].x} ${this.coordinates[1].y - this.coordinates[0].y}`
      },
      roadColor () {
        return this.getValue('COLOR')
      },
      roadStroke () {
        return this.getValue('STROKE')
      }
    },
    methods: {
      getValue (props) {
        if (this.status === TAXI.NAME) return TAXI[props]
        if (this.status === BUS.NAME) return BUS[props]
        else return METRO[props]
      },
      getRoadSinusoity () {
        return this.getValue('SINUSOITY')
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

  .animable path {
    transition: stroke-width 1s ease-out;
  }
</style>
