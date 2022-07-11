<template>
  <header>
      <div class="l-content">
        <div class="btn" @click="collapseMenu">
            <el-button plain class="el-icon-menu" size="mini" active-text-color="#ffd04b"></el-button>
        </div>

        <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{path:item.path }">{{item.label}}</el-breadcrumb-item>
          </el-breadcrumb> 
      </div>
     

      <div class="r-content">
        <el-Dropdown  style="height:40px" trigger="click" size="mini">
          <span><img class="user" :src="userImg" ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b">退出</el-dropdown-item> 
          </el-dropdown-menu>
        </el-Dropdown>
      </div>
  </header>
</template>

<script>
import {mapMutations,mapState} from 'vuex'

export default {
    name:'CommonHeader',
    data(){
       return {
          userImg:require('../assets/img.jpeg'),
       }
    },
    methods:{
        ...mapMutations('isCollapse',['collapseMenu'])
    },
    computed:{
        ...mapState('tab',{tags:'tabsList'})
        
    },
    mounted(){
      
    }
}

</script>

<style lang="less" scoped>
  .btn{
   
    border-radius:3px;
    color: black;
    font-size:20px;
    width:40px;
    height: 30px;
    background:white;   
  }
  .btn:hover{
    color:rgb(29, 171, 237);
  } 

header{ 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.el-breadcrumb{
  margin-left: 20px;
}
.l-content{
  display: flex;
  align-items: center;
  h3{
    margin-left: 15px;
  }
  .elDropdown{
    
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-breadcrumb-item{
    cursor: pointer;
    color: white;
  }
}
.r-content{
  display: flex;
  align-items:center;
  .user{
    width: 40px;
    height: 40px;
    border-radius:50%;
  }
}
</style>