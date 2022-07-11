import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 导入路由器
import router from './router/index'
// 引入store
import store from './store/index'
// 导入axios
import http from 'axios'
// 引入mock
import './api/mock'

// elementUi
import './elementUi/index'

Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

// 全局绑定axios
Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
