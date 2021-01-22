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
      state.items = payload
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
