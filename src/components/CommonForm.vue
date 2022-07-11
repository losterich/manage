<template>
    <!-- 
    ref : 拿到当前的form实例 
    label-width : 设置宽度
    model : 传入的form数据，并且双向绑定数据
    inline : 控制form是单行排列，还是多行排列
    -->
    <el-form ref="form" label-width="100px" :model="form" :inline="inline">
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
            <!-- 通过v-if 判断该渲染出什么组件 -->
            <el-input v-if="item.type === 'input'"
            :placeholder="'请输入'+item.label"
            v-model="form[item.model]"
            ></el-input>

            <el-switch v-if="item.type === 'switch'"
            v-model="form[item.model]"
            ></el-switch>

            <el-date-picker v-if="item.type === 'date'"
            type="date"
            value-format="yyyy-MM-dd"
            v-model="form[item.model]"
            ></el-date-picker>

            <el-select v-if="item.type === 'select'"
            placeholder="请选择"
            v-model="form[item.model]"
            >
            
            <el-option
            v-for="item in item.opts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            ></el-option>

            </el-select>
        </el-form-item>

        <!-- 如果以上不满足，使用插槽 -->
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    // 用于接受属性,组件接受的一些参数
    props:{
        // 接受form的一些配置(类型为数组)
        formLabel:Array,
        // 接受form中的数据(从父组件中传递进来，类型为对象)
        form:Object,
        // 表单的布局(布尔值)
        inline:Boolean,

    },

}
</script>

<style lang="less" scoped>
.el-form{
    display: flex !important;
    flex-wrap: wrap;
}
.el-form-item{
    display: flex !important;
}
.el-input,.el-switch,.el-select,.el-date-picker{
    width: 210px !important;
}

</style>