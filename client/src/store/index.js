import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {
      username: '',
      score: '',
      items: {},
      users: []
    }
  },
  mutations: {
    addPlayer (state, payload) {
      state.player.username = payload.username
      state.player.score = payload.score
    },
      setItems (state, payload) {
      state.items = payload
    },
      setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    enterGame (context, payload) {
      router.push('/dashboard')
      context.commit('addPlayer', payload)
    },
    SOCKET_fetchItems (context, payload) {
      context.commit('setItems', payload)
    },
    SOCKET_fetchUsers (context, payload) {
      context.commit('setUsers', payload)
    }
  },
  modules: {
  }
})
