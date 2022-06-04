// 导入vue
import Vue from "vue"

// 导入vuex
import Vuex from "vuex"

// 应用插件
Vue.use(Vuex)

// 导入模块
import isCollapse from "./isCollapse"

export default new Vuex.Store({
    modules:{
        isCollapse,
    }
})