import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
    users: []
    // {
    //   name: 'Amanda',
    //   points: 10
    // }
  },
  mutations: {
    setItems (state, payload) {
      state.items = payload
    },
    setUsers (state, payload) {
      state.users = payload
    }

  },
  actions: {
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
