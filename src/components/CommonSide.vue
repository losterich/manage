<template>
       
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#505861" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3>{{isCollapse ? '后台':'后台通用管理系统'}}</h3>
        <el-menu-item @click="push(item)" v-for="item in noChildren"  :index="item.path" :key="item.path">
            <i :class="'el-icon-'+item.icon" ></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
       <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path" > 
            <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="(sub_item,sub_index) in item.children" :key="sub_item.path">

            <el-menu-item @click="push(sub_item)" :index="sub_index">{{sub_item.label}}</el-menu-item>
            </el-menu-item-group>
        
        </el-submenu>

</el-menu>
</template>



<script>
import {mapState,mapMutations} from 'vuex'

  export default {
    

    data() {
      return {
        menu:[]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }, 
      push(item) {
          this.$router.push({
            name:item.name,   
      })
      // 点击调用commit方法，传入点击菜单项的值（面包屑数据）,tab/selectMenu 给tab模块下的Mutations的selectMenu
      this.$store.commit('tab/selectMenu',item)
      }


      
    },
    computed:{
        noChildren(){
           return this.Menu.filter(item => !item.children)
        },
        hasChildren(){
           return this.Menu.filter(item =>  item.children)
        },
        ...mapState('isCollapse',['isCollapse']),

        // 获取菜单数据
        Menu(){
          return this.$store.state.tab.menu
        }
        
    },
  }
</script>
<style lang = "less" scoped >
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item{
      text-align:left;
      white-space:nowrap; 
  }
  h3{
    white-space:nowrap;   
  }
  .el-menu{
      height:100%;
      border:none;
      h3{
        color: #fff;
          text-align: center;
          line-height:48px;
      }
  }
</style>