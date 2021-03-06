import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

require('dotenv').config()

axios.defaults.baseURL = 'https://admin.philliplogan.com' //'http://localhost:8000'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
