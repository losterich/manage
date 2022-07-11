// 面包屑数据
export default{
    namespaced:true,
    state:{
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
        }
    }
}