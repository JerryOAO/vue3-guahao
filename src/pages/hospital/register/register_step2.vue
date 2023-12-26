<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <el-card class="box-card">
      <!--卡片头部  -->
      <template #header>
        <div class="card-header">
          <span style="font-weight: bold;">请选择就诊人</span>
          <el-button class="button" type="primary" :icon="Plus">添加就诊人</el-button>
        </div>
      </template>
      <!--卡片内容-->
      <div class="user">
        <Visitor v-for="item in 5" :key="item" class="item" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import Visitor from './visitor.vue'
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
  .tip {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: blue;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    align-items: center;
    // item也是el-card组件
    .item {
      width: 30%;
      margin: 10PX;
      
      .name {
        font-size: 20px;
        font-weight: bold;
      }
      .idcard {
        font-size: 15px;
        font-weight: bold;
      }
      .phone {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
}

</style>