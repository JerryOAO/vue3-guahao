<template>
  <div class="container">
    <GuahaoTop></GuahaoTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <GuahaoBottom></GuahaoBottom>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1200px;
    min-height: 700px;
    margin-top: 70px;
  }
}
</style>
