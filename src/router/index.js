import VueRouter from 'vue-router';

// 导入组件
import main from '../view/Main.vue'
import home from '../view/Home.vue'
import user from '../view/User.vue'
import mall from '../view/Mall.vue'

// 创建路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component:main,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component:home
                },
                {
                    path: 'user',
                    name: 'user',
                    component:user
                },
                {
                    path: 'mall',
                    name: 'mall',
                    component:mall
                }
            ]
        },
     
    ]
})


// 暴露路由器
export default router