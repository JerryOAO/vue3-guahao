<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    <template #footer>Footer content</template>
  </el-card>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    /* background-color: #f5f5f5; */
    padding: 20px;
  }
  .tip {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: blue;
  }
  .el-card__body {
    padding: 20px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button {
    padding: 0;
  }
  .text {
    line-height: 36px;
    font-size: 14px;
  }
  .item {
    border-bottom: 1px solid #ebeef5;
  }
</style>