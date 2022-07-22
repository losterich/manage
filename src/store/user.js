// js-cookie 缓存token
import Cookie from 'js-cookie'

export default {
    namespaced:true,
    state:{
        token:''
    },
    mutations:{
        // 设置token
        setToken(state, val) {
            state.token = val
            Cookie.set('token',val)
        },

        // 清除token
        clearToken(state) {
            state.token = ''
            Cookie.remove('token')
        },
        // 获取token
        getToken(state) {
            // state中无token，则从缓存中获取
            state.token = state.token || Cookie.get('token')   
        }

    }
}