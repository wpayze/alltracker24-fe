import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

// Load Vue Toast
Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
