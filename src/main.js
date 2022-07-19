import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import { makeServer } from '@/server'
import { api } from '@/api'
import '@/assets/scss/reset.scss'
import '@/assets/css/index.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.prototype.$api = api

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
