<template>
  <div id="app">
        <el-container style="height:100%">
          <dz-side width="auto">
            <commonside></commonside>
          </dz-side>
          <el-container>
            <el-header>
              <commonheader></commonheader>
            </el-header>
            <el-main>
              <commonTag></commonTag>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
  </div>
</template>

<script>
// 组件引入
import CommonSide from '../components/CommonSide.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
  name: 'Main',
  components: {
    // 组价注册，组件名:组件
      commonside:CommonSide,
      commonheader:CommonHeader,
      commonTag:CommonTag
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
    display: flex;
  }
</style>
