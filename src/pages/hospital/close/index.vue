<template>
  <div>
    <div class="info">
      <h1>{{ hospitalStore.hospitalInfo.hospital?.hosname }}停诊信息</h1>
      <el-empty description="暂无停诊信息"></el-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入仓库数据
import useDetailStore from "@/store/modules/hospitalDetail.ts";
let hospitalStore = useDetailStore();
</script>

<style scoped>
.info {
  padding: 20px;
  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>