import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import articles from './articles'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  plugins: [createPersistedState()],
  strict: false,
  modules: {
    articles
  }
})
