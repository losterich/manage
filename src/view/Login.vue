<template>
  <el-form
  :model="form"
  status-icon
  :rules="rules"
  ref="form"
  label-width="100px"
  class="login-container"
  >

  <h3 class="login-title">系统登录</h3>
  <el-form-item 
  label="用户名"
  label-width="80px"
  prop="username"
  class="username"
  >
  <el-input
  type="input"
  v-model="form.username"
  placeholder="请输入用户名"
  ></el-input>
  </el-form-item>

  <el-form-item
   label="密码"
  label-width="80px"
  prop="password"
  >
<el-input
type="password"
v-model="form.password"
placeholder="请输入密码"
></el-input>
  </el-form-item>
 

    <el-form-item>
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import Mock from 'mockjs'
import { getMenu } from '../api/data'

export default {
    name:'login',
    data(){
        return{
            form:{
               
            },
            rules:{
                username:[
                    {required:true, message:"请输入用户名", trigger:"blur"},
                    {min:3, message:"长度不能小于3位", trigger:"blur"}
                ],
                password:[
                    {required:true, message:"请输入密码", trigger:"blur"}
                ]
                    
                
            }
        }
    },
    methods:{
        login(){
            getMenu(this.form).then(res => {
                if(res.data.code === 1){ // 登录成功
                this.$store.commit('tab/clearMenu')
                this.$store.commit('tab/setMenu', res.data.data.menu)
                this.$store.commit('user/setToken', res.data.data.token)
                
                // 动态添加路由
                this.$store.commit('tab/addMenu', this.$router)
                // 页面跳转
                this.$router.push({name:'home'})

                }else{
                    this.$message({
                        type:'warning',
                        message:res.data.data.message
                    })
                }
            })
           
        }
    }
}
</script>

<style lang="less" scoped>
body{
    background:  #bebebe;
}
.login-container {
    width: 300px;
    margin:0 auto;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(26, 196, 77);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 35px;
    border-radius: 8px;
    background: #e0e0e0;
    box-shadow:  20px 20px 63px #bebebe,
            -20px -20px 63px #ffffff;   
}
h3{
    margin:20px 0;
}
.el-form-item:nth-child(4) {
    padding-right: 20px;
}

</style>