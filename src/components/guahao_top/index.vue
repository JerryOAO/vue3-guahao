<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/imgs/挂号.png" alt="logo" />
        <p style="color: rgb(37, 119, 186)">全国统一预约挂号平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p>登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

let router = useRouter()
const goHome = () => {
  router.push('/home')
}
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  .content {
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    // background-color: red;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-bottom: 10px;
        margin-right: 5px;
      }
      p {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
