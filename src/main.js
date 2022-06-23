import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// libs
import '@/libs/fontawesome'
import '@/libs/carousel'
import '@/libs/google-maps'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
