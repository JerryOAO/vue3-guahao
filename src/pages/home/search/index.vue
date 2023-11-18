<template>
  <div class="search">
    <el-autocomplete @select="goDetail" :trigger-on-focus="false" placeholder="请输入医院名称" clearable v-model="hosname" :fetch-suggestions="fetchData"/>
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { reqHospitalInfo } from '@/api';
import { HospitalInfo } from '@/api/type';
import { useRouter } from 'vue-router';

//搜索框的关键字
const hosname = ref('')
const fetchData = async (keyword:string, cb:any) => {
  //用户输入玩关键字后，会调用这个函数，然后去请求数据
  let result:HospitalInfo= await reqHospitalInfo(keyword)
  //整理数据，将数据整理成el-autocomplete需要的格式
  let showData = result.data.map(item=>{
    return {
      value:item.hosname, //显示医院的名字
      hoscode:item.hoscode //医院的code
    }
  })
  cb(showData)
}
//点击推荐的医院，跳转到医院详情页面
let router = useRouter()
const goDetail = (item:any) => {
  console.log(item)
  //跳转到医院详情页面
  router.push({
    path:'/hospital'
    // query:{
    //   hoscode:item.hoscode
    // }
  })
}
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>