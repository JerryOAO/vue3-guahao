<template>
  <div class="hospital">
    <div class="menu">
      <div class="tips">
       <span>会员中心</span>
      </div>
      <el-menu
        :default-active="route.path"
        @select="onSelect"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item index="/user/certification">
          <el-icon><Postcard /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/order">
          <el-icon><ToiletPaper /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item index="/user/patient">
          <el-icon><Files /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item index="/user/profile">
          <el-icon><PriceTag /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item index="/user/feedback">
          <el-icon><Management /></el-icon>
          <span>意见反馈</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Postcard, ToiletPaper, Files, PriceTag,Management } from "@element-plus/icons-vue";
import { useRoute,useRouter } from "vue-router";

let route = useRoute();
let router = useRouter()
//onSelect回调时，会传入当前选中的菜单项的 index 值和query作为参数
const onSelect = (index: string) => {
  router.push({ path: index, query: { hoscode: route.query.hoscode } });
};
console.log('route',route.path)

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
