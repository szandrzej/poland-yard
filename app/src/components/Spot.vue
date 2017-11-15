<template>
  <g :transform="translate()">
    <svg width="62" height="62">
      <defs>
        <filter id="f1" x="-20%" y="-20%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="4"/>
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"/>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
        </filter>
      </defs>
      <g filter="url(#f1)" class="clickable" v-on:click="$emit('selected')">
        <path d="M1,26 a1,1 0 0,1 50,0" :fill="topColor" stroke="black"/>
        <path d="M1,26 a1,1 0 0,0 50,0" :fill="bottomColor" stroke="black"/>
        <path d="M1,26 L51,26" stroke="black"/>
        <rect x="6" y="16" width="40" height="20" :fill="rectColor" stroke="black"/>
        <text x="26" y="32" :fill="textColor" text-anchor="middle" font-size="16">{{ data.number }}</text>
      </g>
    </svg>
  </g>
</template>

<script>
  import { TAXI, BUS, METRO } from '../common/mapConfig'

  export default {
    name: 'spot',
    data () {
      return {}
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      textColor () {
        if (this.data.status.metro) return 'white'
        else return 'black'
      },
      rectColor () {
        if (this.data.status.metro) return METRO.COLOR
        else return 'white'
      },
      topColor () {
        if (this.data.status.taxi) return TAXI.COLOR
        else return BUS.COLOR
      },
      bottomColor () {
        if (this.data.status.bus) return BUS.COLOR
        else return TAXI.COLOR
      }
    },
    methods: {
      translate () {
        return `translate(${this.data.position.x}, ${this.data.position.y})`
      }
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
  .clickable {
    cursor: pointer;
  }
</style>
