import { createStore } from 'vuex'

export default createStore({
  state: {
    getUserFn: null
  },
  mutations: {
    severGetUserFn (state, fn) {
      state.getUserFn = fn
    }
  }
})
