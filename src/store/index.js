import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  // 异步方法
  actions: {
    addSync(context) {
      setTimeout(() => {
        // 通过 commit 触发 mutations 中的方法
        context.commit('add')
      }, 1000)
    },
    addNSync(context, step) {
      setTimeout(() => {
        // 通过 commit 触发 mutations 中的方法
        context.commit('addN', step)
      }, 1000)
    },
    subSync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNSync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum: (state) => {
      return `最新的数量为:${state.count}`
    }
  },
  modules: {}
})
