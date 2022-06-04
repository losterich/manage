// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let list = []

export default{
    getStaticalData:() =>{
        // Mock.Random.float 产生随机数100-8000 保留小数最小0为，最大0位
        for(let i = 0; i < 7;i++){
            list.push(
                Mock.mock({
                    apple:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    huawei:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return {
            code:20000,
            data:{
            // 饼图
            videoData:[
                {name:'小米', value:1999},
                {name:'apple', value:9999},
                {name:'vivo', value:2999},
                {name:'oppo', value:1799},
                {name:'huawei', value:5999},
                {name:'魅族', value:3999},

            ],
            // 柱状图
            userData: [
                {data:'周一',new:10,active:500},
                {data:'周二',new:54,active:200},
                {data:'周三',new:25,active:100},
                {data:'周四',new:75,active:130},
                {data:'周五',new:15,active:120},
                {data:'周六',new:45,active:440},
                {data:'周七',new:35,active:330},
            ],
              // 折线图
            orderData:{
                date:['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                data:list
            },

            tableData:[
                {name:'oppo',todayBuy:500,monthBuy:2500,totalBuy:22000},
                {name:'vivo',todayBuy:300,monthBuy:1500,totalBuy:25000},
                {name:'小米',todayBuy:660,monthBuy:3500,totalBuy:12650},
                {name:'魅族',todayBuy:800,monthBuy:4500,totalBuy:24300},
                {name:'华为',todayBuy:666,monthBuy:2340,totalBuy:15600},
                {name:'apple',todayBuy:383,monthBuy:2500,totalBuy:8900},
            ]
            }           
        }      
    }
}