<template>
  <div ref="echart"></div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts"
export default {
    props:{
      // 是否有x，y轴
      isAxisChart: {
        type:Boolean,
        default:true
      },

      // 接收option参数
      chartData:{
        type:Object,
        default(){
          return {
            xData:[],
            series
          }
        }
      }
    },
    data(){

    },
    // 通过计算属性判断传入的option
    computed:{
        options(){
          return this.isAxisChart
        }
    }
}
</script>

<style>

</style>