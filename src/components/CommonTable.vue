<template>
    <div class="common-table">
        <el-table :data="tableData" height="90%" stripe>
            <el-table-column
             show-overflow-tooltip
             v-for="item in tableLabel"
             :key="item.prop"
             :label="item.label"
             :width="item.width ? item.width :125"
            >
            
            <!-- slot-scope 用于接受插槽里面传入的相关的数据 -->
            <template slot-scope="scope">
            <span>{{scope.row[item.prop]}}</span>
            </template>
            
            </el-table-column>
            <el-table-column label="操作" min-width="180">
            <template slot-scope="scope">
                <el-button size="mini" @click="handEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handDelete(scope.row)">删除</el-button>
            </template>


            </el-table-column>
        </el-table>
        <el-pagination
        class="page"
        layout="prev, pager, next"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changePage"
        :page-size="20"
        >

        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'CommonTable',
    props:{
      tableData:Array,
      tableLabel:Array,
      config:Object
    },
    methods:{
        handEdit(row){
            this.$emit('edit', row)
        },

        handDelete(row){
            //????????????????????????????????????????????????????
            this.$emit('del', row)
        },

        changePage(page){
            this.$emit('changePage', page)
        },
    }
}
</script>

<style lang = "less" scoped>
.common-table{
    // 计算属性
    height: 70vh;
    line-height:15px;
    margin-top: 15px;
    background: white;
    position: relative;
    .page{
        position: absolute;
        bottom:0;
        right:20px;
    }

}

</style>