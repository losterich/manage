

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

// 按需引入elementUi组件
import {Main,Aside,Header,Container,Menu,Submenu
  ,MenuItemGroup,MenuItem,Dropdown,DropdownMenu
  ,DropdownItem,Row,Card,Col,Table,TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.component(Main.name,Main)
Vue.component('dz-side',Aside)
Vue.component(Header.name,Header)
Vue.component(Container.name,Container)
Vue.component(Menu.name,Menu)
Vue.component(Submenu.name,Submenu)
Vue.component(MenuItemGroup.name,MenuItemGroup)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Row.name,Row)
Vue.component(Card.name,Card)
Vue.component(Col.name,Col)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)

// 应用插件
Vue.use(VueRouter)

// 全局绑定axios
Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
