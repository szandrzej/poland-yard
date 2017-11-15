import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lobby from '@/components/Lobby'
import WS from '@/realtime'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lobby',
      component: Lobby,
      beforeEnter (to, from, next) {
        if (store.state.currentGame) {
          WS.leave(store.state.currentGame._id)
          store.dispatch('CLEAR_GAME')
        }
        next()
      }
    },
    {
      path: '/game',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
