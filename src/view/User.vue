<template>
  <div class="manage">
     <el-dialog 
     :title="operateType === 'add' ? '新增用户':'编辑用户'"
     :visible.sync="isShow"
     >
    <CommonForm
    :formLabel="operateFormLabel"
    :form="operateForm"
    :inline="true"
    ref="form"

    ></CommonForm>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShow = false">取消</el-button>
      <el-button type="primary" @click="confirm()">确定</el-button>
    </div>
     </el-dialog>

     <div class="manage-header">
      <el-button @click="addUser" type="primary" >+新增</el-button>
      <CommonForm
          :formLabel="FormLabel"
          :form="searchForm"
          :inline="true"
          ref="form"
      >
      <el-button @click="getList()" type="primary">搜索</el-button>
      </CommonForm>
     </div>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
export default {
  name: "User",
  data(){
      return{
        operateType:'add',
        isShow:false,
        operateFormLabel:[
    {
        model:'name',
        label:'姓名',
        type:'input',
    },
    {
        model:'age',
        label:'年龄',
        type:'input',
    },
    {
        model:'sex',
        label:'性别',
        type:'select',
        opts:[
            {
                label: '男',
                value: '1'
            },
            {
                label: '女',
                value: '0'
            }
        ]
    },
    {
        model:'birth',
        label:'出生日期',
        type:'date',
    },
    {
        model:'addr',
        label:'地址',
        type:'input',
    },
    
        ],
        operateForm:{
           name:'',
           addr:'',
           age:'',
           birth:'',
           sex:''
        },
        FormLabel:[
            {
              model:'keyword',
              label:'',
              type:'input',
            }
        ],
        searchForm:{
          keyword:'',
        }

        
      }
  },
  components:{
    CommonForm
  },
  methods:{
      confirm(){
        if(this.operateType === 'edit'){
           this.$http.post('/api/user/edit', this.operateForm).then(res => {
             // 关闭弹窗
             this.isShow = false
             console.lo(res.data)
           })
        }else if(this.operateType === 'add'){
           this.$http.post('/api/user/add', this.operateForm).then(res => {
             // 关闭弹窗
             console.log(this.operateForm)
             this.isShow = false
             console.log(res.data)
           })
        }
      },
      addUser(){
        this.isShow = true
        this.operateType = 'add'

        // 数据初始化
        this.operateForm = {
           name:'',
           addr:'',
           age:'',
           birth:'',
           sex:''
        }
      },
      getList(){},
  }
}
</script>

<style lang="less" scoped>
.manage-header{
    line-height:15px;
    display: flex;
    justify-content:space-between;
    height: 40px;
}
/deep/ .el-dialog__header {
    padding: 0;
    line-height:20px;
    padding: 15px 0 0 15px;
    text-align: left;
}
.dialog-footer{
    height: 30px;
    line-height:20px;
}
/deep/ .el-dialog{
  width: 760px;
} 
</style>