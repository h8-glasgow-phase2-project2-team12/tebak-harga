import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {
      username: '',
      score: ''
    }
  },
  mutations: {
    addPlayer (state, payload) {
      state.player.username = payload.username
      state.player.score = payload.score
    }
  },
  actions: {
    enterGame (context, payload) {
      router.push('/dashboard')
      context.commit('addPlayer', payload)
    }
  },
  modules: {
  }
})
