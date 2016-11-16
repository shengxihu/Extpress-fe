import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'

import router from './route/router.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
