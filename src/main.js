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

// 全局前置路由守卫
router.beforeEach((to, from, next) => {

  store.commit('user/getToken') 

  const token = store.state.user.token
  // token不存在没有登录），跳回登录页
  if (!token && to.name !== 'login'){
    next({name:'login'})
  // token存在（已登录），跳转回首页
  }else if(token && to.name === 'login'){
    next({name:'home'})

  }
  else{
    next()
  }
})


// 应用插件
Vue.use(VueRouter)

// 全局绑定axios
Vue.prototype.$http = http

new Vue({
  store,
  router,
  // 防止动态添加路由后，刷新导致屏幕白屏
  created(){
    store.commit('tab/addMenu', router)

  },
  render: h => h(App),
}).$mount('#app')
