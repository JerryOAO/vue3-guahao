<template>
  <div class="hospital">
    <div class="menu">
      <div class="tips">
       <el-icon><List /></el-icon> 丨 <span>医院详情</span>
      </div>
      <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item index="/hospital/register">
          <el-icon><Tickets /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail">
          <el-icon><HomeFilled /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice">
          <el-icon><Select /></el-icon>
          <span>预约需知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close">
          <el-icon><Warning /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tickets, Warning, HomeFilled, Select, Search,List } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetail.ts"; 

let route = useRoute();
console.log('route',route.path)
//
let detailStore = useDetailStore();
onMounted(() => {
  detailStore.getHospital(route.query.hoscode);
});

</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  .tips{
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 20px 20px;
    color: #7f7f7f;
  }
  .menu {
    flex: 2;
  }

  .content {
    flex: 8;
  }
}
</style>
