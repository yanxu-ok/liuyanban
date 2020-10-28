import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import baseUrl from '@/libs/baseurl.js'
Vue.prototype.$url = baseUrl.URL

const app = new Vue({
    ...App
})
app.$mount()
