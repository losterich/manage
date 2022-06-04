// 侧边栏折叠
export default{
    namespaced:true,
    state:{
        isCollapse:false,
    },
    mutations:{
        collapseMenu(state,value){
            state.isCollapse = !state.isCollapse;

        }
    }   
}