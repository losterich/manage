<template>
  <header>
      <div class="l-content">
        <div class="btn" @click="collapseMenu">
            <el-button plain class="el-icon-menu" size="mini" active-text-color="#ffd04b"></el-button>
        </div>
           <h3>首页</h3>
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
import {mapMutations} from 'vuex'
export default {
    name:'CommonHeader',
    data(){
       return {
          userImg:require('../assets/img.jpeg')
       }
    },
    methods:{
        ...mapMutations('isCollapse',['collapseMenu'])
    },
    computed:{

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