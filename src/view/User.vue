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
                                 <!-- 加 () ?????????? -->
      <el-button @click="getList(searchForm.keyword)" type="primary">搜索</el-button>
      </CommonForm>
     </div>
     <CommonTable
     :tableData="tableData"
     :tableLabel="tableLabel"
     :config="config"
     @changePage="getList()"
     @edit="editUser"
     @del="delUser"
     ></CommonTable>
  </div>
</template>

<script>
import CommonForm from '../components/CommonForm.vue'
import CommonTable from '../components/CommonTable.vue'
import {getUser} from '../api/data'

export default {
  name: "User",
    components:{
    CommonForm,
    CommonTable,
},
  data(){
      return{
        operateType:'add',
        isShow:false,

        // 表单
        // 表单项配置
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
        // 表单参数
        operateForm:{
           name:'',
           addr:'',
           age:'',
           birth:'',
           sex:''
        },
        // 搜索框配置
        FormLabel:[
            {
              model:'keyword',
              label:'',
              type:'input',
            }
        ],
        // 搜索框参数
        searchForm:{
          keyword:'',
        },

        // 列表
        tableData:[],
        tableLabel:[
          // prop为要读取的字段的名称
          {
            prop:'name',
            label:'姓名'
          },
          {
            prop:'age',
            label:'年龄'
          }, 
          {
            prop:'sexLabel',
            label:'性别'
          }, 
          {
            prop:'birth',
            label:'出生日期',
            width:'200'
          }, 
          {
            prop:'addr',
            label:'地址',
            width:'320'
          }, 
        ],

        // 分页的配置数据
        config:{
          page:1,
          total:30,
        }

      }
  },

  methods:{
      confirm(){
        if(this.operateType === 'edit'){
          // ??????????????????
           this.$http.post('/api/user/edit', this.operateForm).then(res => {
             // 关闭弹窗
             this.isShow = false
             // 编辑和新增数据后，重新获取数据（更新数据）
             this.getList()
           })
        }else if(this.operateType === 'add'){
           this.$http.post('/api/user/add', this.operateForm).then(res => {
             // 关闭弹窗
             this.isShow = false

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

      // 获取用户
      getList(name = ''){
        this.config.loading = true

        // 判断name是否存在
        name ? (this.config.page = 1) : ''

        // 请求数据
        getUser({
          page:this.config.page,
          name
        }).then(({data:res}) => {
          this.tableData = res.list.map(item => {
            item.sexLabel = item.sex === 0 ? "女" : "男"
            item.sex = item.sex === 0 ? "女" : "男"

            return item
          })
          this.config.total = res.count
          this.config.loading = false
        })
      },

      // 编辑用户
      // row 当前用户数据
      editUser(row){
        this.operateType = 'edit'
        // 打开弹窗
        this.isShow = true
        // 打卡弹窗后，赋值,值回显
        this.operateForm = row
      },

      // 删除用户
      delUser(row){
        this.$confirm("此操作将永久删除该组件，是否继续？", "提示", {
          confirmButtonText:'确认',
          cancelButtonText:'取消',
          type:"warning"

        }).then(() => {
          const id = row.id
          this.$http.get("/api/user/del", {
            params:{id}
          }).then(() => {
                this.$message({
                  type:'success',
                  message:"删除成功"
                })
          })
          this.getList()
        })
      }
  },

  // getList在页面加载的时候就要调用，要写在生命周期里
  created(){
    this.getList()
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