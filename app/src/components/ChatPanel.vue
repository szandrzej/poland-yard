<template>
  <div class="chat">
    <div class="chat__container">
      <div clas="chat__container-inner">
        <p class="chat__message" v-for="message in messages">[{{ message.date | moment("h:mm:ss") }}] - <span
          class="bold">{{ message.sender }}</span> - {{ message.message }}</p>
      </div>
    </div>
    <div class="chat__input">
      <input placeholder="Wiadomość..." v-model="message"/>
      <md-button class="md-icon-button md-accent chat__input__button" @click="sendMessage()">
        <md-icon>send</md-icon>
      </md-button>
    </div>
  </div>
</template>
npm
<script>
  import gameMixin from '@/mixins/gameMixin'

  export default {
    name: 'chat_panel',
    mixins: [ gameMixin ],
    data () {
      return {
        message: ''
      }
    },
    computed: {
      messages () {
        return this.$store.state.currentGame.chat
      }
    },
    methods: {
      sendMessage () {
        this.$store.dispatch('SEND_MESSAGE', this.message)
        this.message = ''
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/mixins"

  .chat
    position: fixed
    height: 192px
    width: calc(30% - 10px)
    background-color: #212121
    left: 8px
    bottom: 8px
    border-radius: 30px
    padding: 8px
    @include box-shadow(2px, 2px, 10px, rgba(0, 0, 0, 0.75))
    overflow: auto

    &__message
      color: #bbb
      text-align: left
      margin: 0 0 0 8px !important
      padding: 0 !important
      font-size: 10px

      span.bold
        font-weight: bold
    &__input
      width: 100%
      justify-content: flex-start
      display: inline-flex
      margin-top: 4px
      margin-bottom: 4px
      &__button
        margin-bottom: 4px

      input
        color: whitesmoke
        background-color: #444
        padding-left: 16px
        outline: none
        border: 0px black solid
        border-radius: 5px 5px 5px 25px
        width: calc(100% - 40px)
    &__input-container
      height: 40px

    &__container
      width: 100%
      position: relative
      height: 124px
      padding: 4px
      background-color: #444
      border-radius: 25px 25px 5px 5px
      overflow-y: auto


</style>
