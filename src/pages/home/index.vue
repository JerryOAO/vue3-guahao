<template>
  <div class="home">
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索框 -->
    <Search />
    <h1>医院</h1>
    <el-row :gutter="20">
      <el-col :span="22">
        <!-- 医院等级子组件 -->
        <level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院结构卡片 -->
        <div class="hospitol">
          <Card v-for="item in 10" :key="item" />
        </div>

      </el-col>
      <el-col :span="2">22</el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import level from './level/index.vue'
import Region from './region/index.vue'
import Card from './Card/index.vue'
</script>

<style scoped lang="scss">
.home {
  h1 {
    color: #767687;
    font-weight: 900;
    margin-top: 10px;
  }

  .hospitol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 48%;
      margin: 10px 0px;
    }
  }
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>