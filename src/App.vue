<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
// 组件引入
import CommonSide from './components/CommonSide.vue'

export default {
  name: 'App',
  components: {
    // 组价注册，组件名:组件
      commonside:CommonSide,
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    height: 100vh;/* vh就是当前屏幕可见高度的1%，也就是说100vh 100% */
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
    height: 100%;
  }
    .el-header{
    background-color: #262626;
    color: rgb(236, 230, 230);
    text-align: center;
    line-height: 60px;
    height: 100%;
  }
</style>
