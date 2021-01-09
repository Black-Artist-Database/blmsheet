import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import articles from './articles'
import voices from './voices'
import watch from './watch'

localStorage.removeItem('vuex-state-name')

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  plugins: [createPersistedState()],
  strict: false,
  modules: {
    articles,
    voices,
    watch
  }
})
