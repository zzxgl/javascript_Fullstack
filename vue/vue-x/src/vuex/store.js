import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

// 同步
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count -= 2
  }
}

// 异步队列
const actions = {
  addAction (context, n) {
    context.commit('add', n)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000)
  }
}
const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}
// Vuex.Store包裹住的state抛出export
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
