<template>

</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { SET_TOKEN } from '@/utils/user';
let route = useRoute();
// let time = ref<number>(3);
//刚进入页面时立即SET_TOKEN，然后0.1秒后跳转到上个路由页面
SET_TOKEN(JSON.stringify(route.query));
setTimeout(() => {
  window.history.go(-1);
}, 100);
</script>

<style scoped>
.login-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-success__icon {
  margin-bottom: 20px;
}

.login-success__text {
  font-size: 16px;
  color: #666;
}
</style>