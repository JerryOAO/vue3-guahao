<template>
  <div class="hospital">
    <div class="menu">
      <div class="tips">
       <span>医院详情</span>
      </div>
      <el-menu
        :default-active="route.path"
        @select="onSelect"
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
import { useRoute,useRouter } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetail.ts"; 




let route = useRoute();
let router = useRouter()
//onSelect回调时，会传入当前选中的菜单项的 index 值和query作为参数
const onSelect = (index: string) => {
  router.push({ path: index, query: { hoscode: route.query.hoscode } });
};
console.log('route',route.path)
//
let detailStore = useDetailStore();
onMounted(() => {
  //获取医院详情
  detailStore.getHospital(route.query.hoscode as string);
  //获取医院科室的数据
  detailStore.getDepartment(route.query.hoscode as string);
});

</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  .tips{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
  }
  .menu {
    // flex: 1;
    // border-right: 1px solid #ebebeb;
    .el-menu-vertical-demo {
      width: 100%;
      border: none;
      background-color: #fff;
      .el-menu-item {
        padding-left: 4px;
        border-left: 4px solid transparent;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #7f7f7f;
        width: 150px;
        &:hover {
          background-color: #f5f5f5;
          border-left: 4px solid rgb(45, 122, 246);
        }
        &.is-active {
          background-color: #f5f5f5;
          border-left: 4px solid rgb(45, 122, 246);
          color: rgb(45, 122, 246);
        }
      }
    }

  }

  .content {
    flex: 8;
    padding: 20px;
  }
}
</style>
