import { createStore } from 'vuex'
import storeECharts from './modules/storeECharts'

export default createStore({
  state: {
    currentPath: ''
  },
  getters: {
    getCurrentPath(state) {
      return state.currentPath
    }
  },
  mutations: {
    setCurrentPath(state, path) {
      state.currentPath = path
    }
  },
  actions: {
  },
  modules: {
    storeECharts
  }
})
