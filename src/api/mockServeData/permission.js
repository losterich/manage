import Mock from 'mockjs'

export default {
    getMenu: config => {
        const {username, password} = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if(username === 'admin' && password === 'admin') {
            return{
                code:1,
                data:{
                    menu:[
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',

                            // 页面文件路径
                            url:'Home.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon:'video-play',
                            url:'Mall.vue'
                        },
                        {
                            path:'user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url:'User.vue'
                        },
                        {
                            label:'其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url:'other/page1.vue'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url:'other/page2.vue'

                            
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if(username === 'user' && password === 'user'){
            return {
                code:1,
               data:{
                menu:[
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 's-home',

                        // 页面文件路径
                        url:'Home.vue'
                    },
                    {
                        path: '/mall',
                        name: 'mall',
                        label: '商品管理',
                        icon:'video-play',
                        url:'Mall.vue'
                    },],
                token: Mock.Random.guid(),
                message: '获取成功'
               }
            }
        }else{
            return{
                code:0,
                data:{
                    message: '账号或密码错误'
                }
            }
        }
    }
}