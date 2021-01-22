import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
    players: []
  },
  mutations: {
    setItems (state, payload) {
      // shuffle the items
      var array = payload
      for (let i = 10; i > 0; i--) {
        const temp = array[i]
        const j = Math.floor(Math.random() * (i + 1))
        array[i] = array[j]
        array[j] = temp
      }
      const arraySliced = array.slice(0, 8)
      state.items = arraySliced
    },
    setPlayers (state, payload) {
      state.players = payload
    }
  },
  actions: {
    enterGame (context, payload) {
      router.push('/dashboard')
      context.commit('setPlayers', payload)
    },
    SOCKET_playerList (context, payload) {
      context.commit('setPlayers', payload)
    },
    SOCKET_fetchItems (context, payload) {
      context.commit('setItems', payload)
    },
    logout (context, payload) {
      localStorage.clear()
      router.push('/')
    }
  },
  modules: {
  }
})
