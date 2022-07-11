<template>
  <div class="tags">
    <el-tag 
    v-for="(tag, index) in tags" 
    :key="tag.name" 
    :closable="tag.label !== '首页'" 
    :effect="$route.name === tag.name ? 'dark' : 'plain'" 
     @click="changeMenu(tag) " 
    @close="handleClose(tag, index)">{{tag.label}}</el-tag>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'

export default {
    computed:{
        ...mapState('tab',{tags:'tabsList'})      
    },
    methods:{
        // 引入关闭标签函数
        ...mapMutations('tab',['closeTag']),
        changeMenu(tag){
            // tags 路由跳转
            this.$router.push({name:tag.name})
        },
        handleClose(tag, index){
            const length = this.tags.length - 1
            // 调用关闭函数
            this.closeTag(tag)
            // 如果点击的路由不是当前路由，就不用进行以下操作
            if(tag.name !== this.$route.name){
                return
            }
            // 判断点击的是不是最右边的标签 
            if(index == length){
                this.$router.push({
                    name:this.tags[index - 1].name
                })
            }else{
                 this.$router.push({
                    name:this.tags[index].name
                })
            }
        }

    }
}
</script>

<style lang = "less" scoped>
.tags{
   height: 40px;
   line-height:30px;
   display: flex;
}
.tags .el-tag{
    margin-right: 10px;
    cursor: pointer;
}
</style>