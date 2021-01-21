import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
    users: {
      name: '',
      points: 0
    }
  },
  mutations: {
    setItems (state, payload) {
      state.items = payload
    }
  },
  actions: {
    SOCKET_fetchItems (context, payload) {
      context.commit('setItems', payload)
    }
  },
  modules: {
  }
})
