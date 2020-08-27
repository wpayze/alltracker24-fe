import Vuex from 'vuex'
import Vue from 'vue'

import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import parcel from './modules/parcel'

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    user,
    parcel
  }
});