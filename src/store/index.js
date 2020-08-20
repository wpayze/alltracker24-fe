import Vuex from 'vuex';
import Vue from 'vue';

import createPersistedState from 'vuex-persistedstate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

import user from './modules/user';

// Load Vuex
Vue.use(Vuex);

// Load Vue Toast
Vue.use(VueToast);

// Create store
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    user
  }
});