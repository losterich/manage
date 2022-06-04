<template>
  <div>
      <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px;">
          <el-card shadow="hover">
            <div class="user">
             <div class="box">
               <img :src="userImg">
              <div class="userinfo">
                
                <p class="name " style="font-size:25px">Admin</p>
                <p class="access" style="font-size:12px">超级管理员</p>
              </div>
             </div>
              <div class="login">
                <p>上次登录时间： <span>2022-4-23</span></p>
                <p>上次登录地点： <span>百慕大</span></p>
              </div>
            </div>
          </el-card>
          <el-card style="margin-top:20px;height:380px">
         
          <div class="table">
                <el-table :data="tableData">
              <el-table-column v-for="(value,index) in tableLabel"
                :key="index"
                :prop="index"
                :label="value"
                :header-row-style="{height:'40px'}"
                >
              </el-table-column>
            </el-table>
          </div>
         
          </el-card>
        </el-col>

        <el-col :span='16'>
            <div class="num_box">
              <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
              <div class="detail">
                  <p class="num">￥{{item.value}}</p>
                  <p class="text">￥{{item.name}}</p>
              </div>
              </el-card>
            </div>

            <el-card class="mid" style="height:280px">
              <div style="height:280px" ref="echarts"></div>
            </el-card>
            <div class="cardbox">
              <el-card >
                <div style="height:220px" ref="userEcharts"></div>
              </el-card>
              <el-card >
                <div style="height:150px" ref="videoEcharts"></div>
              </el-card>
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
// 引入data.js
import {getData} from "../api/data.js"
// 引入echarts
import * as echarts from "echarts"
export default {
    name:'home',
    data(){
         return {
          userImg:require('../assets/img.jpeg'), 
          tableData:[
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
                {
                    name: 'huawei',
                    todayBuy:'100',
                    monthBuy:'300',
                    totalBuy:'800',
                },
          ],
          tableLabel: {
            name:'课程',
            todayBuy:'今日购买',
            monthBuy:'本月购买',  
            totalBuy:'总购买',
          },
          countData: [
                {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
    {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
    {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
    {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
    {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
    {
        name: '今日支付订单',
        value: '123',
        icon:'success',
        color:'#FF502F'
    },
          ],
       }
    },
    mounted(){
      getData().then(res =>{
        const {code,data} = res.data;
        console.log(data)
        if(code == 20000){
          this.tableData = data.tableData
          const order = data.orderData
          const xData = order.date
          // 获取对象第一个属性的值
          const keyArray = Object.keys(order.data[0])
          const series = [] 
          keyArray.forEach( key => {
              series.push({
                name: key,
                data: order.data.map(item=>item[key]),
                type:'line'
              })   
          })

          // 折线图配置
          const option = {
              xAxis: {
                data:xData,
              },
              yAxis: {},
              legend: {
                data:keyArray,
              },
              series
          }
          const E = echarts.init(this.$refs.echarts)
          E.setOption(option)

        // 柱状图配置
        const userOption ={
            legend: {
              // 图例文字颜色
              textStyle:{
                color:"#333"
              },
            },
            grid: {
               left: "20%"
            },
            // 提示框
            tooltip: {
                trigger:'axis'
            },
            xAxis:{
              type: 'category',// 类目轴
              data:[],
              axisLine:{
                lineStyle:{
                  color:"#17b3a3"
                },

              },
              axisLabel:{
                interva:0,
                color:"#333"
              }
            },
            yAxis:[
              {
                type: 'value',
                axisLine:{
                  lineStyle:{
                    color:"#17b3a3"
                  }
                }
              }
            ],
            color:["#2ec7c9","#b6a2de"],
            series:[
              {
                name: '新增用户',
                data:data.userData.map(item => item.new),
                type: 'bar'
              },
              {
                name: '活跃用户',
                data:data.userData.map(item => item.active),
                type: 'bar'
              },
            ],
        }
        const U = echarts.init(this.$refs.userEcharts)
        U.setOption(userOption)

        // 饼图
        const videoOption = {
            tooltip:{
              trigger:'item'
            },
            color:[
              '#0f78f4',
              '#dd536b',
              '#9462e5',
              '#a6a6a6',
              '#e1bb22',
              '#39c362',
              '#3edd1cf',
            ],
            series:[
              {
                data:data.videoData,
                type: 'pie'
              }
            ]  
        }
         const V = echarts.init(this.$refs.videoEcharts)
         V.setOption(videoOption)
        }
      })
    }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.user img{
  width: 90px;
  border-radius: 50%;
}
.user {
  display: flex;
  flex-direction: column;
  min-width:250px;
}
.box{
  height: 90px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(149, 147, 147);
}
.box p{
  height: 30px;
  width: 80px;
  line-height:30px;
  text-align: left;
  margin-left: 30px;
}
.login{
  margin-top:20px;
  p{
    height: 30px;
    width: 200px;
    line-height: 30px;
    text-align:left;
    font-size:12px;
    font-weight:200;
    span{
      margin-left:40px;
    }
  }
}

.table{
  line-height:20px;
}
.num_box{
  min-width: 640px;
  line-height:30px;
  margin-top: 10px;
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  .el-card{
    height: 60px; 
    text-align: left;
    width: 28%;
    margin-top: 10px;
  }
  i{
    font-size:30px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height:60px;
    color:#5BD1D7;

   
  }

  .detail{
     .num{
      font-size:25px;
    }
    .text{
      font-size:12px;
    }
  }

}
.mid{
  margin-top:20px;
}
.cardbox{
  margin-top: 20px;
  display:flex;
  justify-content:space-between;
  .el-card{
    width: 49%;
    height: 178px;
  }

}

</style>