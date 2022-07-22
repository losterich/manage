import Cookie from 'js-cookie'
export default{
    namespaced:true,// 命名空间，设置后，封闭作用域。调用其方法时 要在前面加模块名
    state:{

        // 面包屑数据
        tabsList:[
            {
                path: '/',
                name:'home',
                label: '首页',
                icon: 'home'
            }
        ],
        // 当前菜单项
        currentMenu:null,

        // 菜单
        menu:[]
    }, 
    mutations:{
        // 改变state值
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
                // 拿到当前选中项的索引，并判断是否存在
                const result = state.tabsList.findIndex(item => item.name === val.name)
                // 如果不存在，添加索引
                if(result === -1){
                    state.tabsList.push(val)
                }else{
                    // 如果选中的的为首页，则重置
                    currentMenu:null
                }

            }
        },

        closeTag(state, val) {
            // 找索引的元素，找到返回索引，找不到返回-1
            const result = state.tabsList.findIndex(item => item.name === val.name)
            // 数组的splice方法，删除元素
            state.tabsList.splice(result, 1)
        },


        // 登录相关
        setMenu(state, val){
            state.menu = val
            
            // 将获取到的菜单存入cookie中，防止刷新时数据丢失
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state){
            state.menu = []
            Cookie.remove('menu')   
        },
        addMenu(state, router){
            if(!Cookie.get('menu')){
                return
            }
            // 拿到cookie menu数据并存为对象
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                // 判断是否存在二级页面，并动态添加路由
                if(item.children){
                    item.children = item.children.map(item =>{
                        item.component = () => import(`../view/${item.url}`) 
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    // 一级菜单
                    item.component = () => import(`../view/${item.url}`) 
                    menuArray.push(item)
                    return item
                }
            })
            // 路由的动态添加
            menuArray.forEach( item => {
                console.log(item)
                router.addRoute('main', item)
            })
        } 
    }
}