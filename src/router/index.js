import VueRouter from 'vue-router';

// 导入组件
import main from '../view/Main.vue'
import home from '../view/Home.vue'
import user from '../view/User.vue'
import mall from '../view/Mall.vue'
import login from '../view/Login.vue'

// 创建路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component:main,
            children: [
                // {
                //     path: '/',
                //     name: 'home',
                //     component:home
                // },
                // {
                //     path: 'user',
                //     name: 'user',
                //     component:user
                // },
                // {
                //     path: 'mall',
                //     name: 'mall',
                //     component:mall
                // },
                // {
                //     path: 'page1',
                //     name: 'page1',
                //     component:() => import('../view/other/page1.vue')
                // },
                // {
                //     path: 'page2',
                //     name: 'page2',
                //     component:() => import('../view/other/page2.vue')
                // }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component:login
        }
     
    ]
})


// 暴露路由器
export default router