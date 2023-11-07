<template>
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 5" :key="item">
      <img :src="`src/assets/images/banner/web-banner-${item}.png`" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}
</style>
