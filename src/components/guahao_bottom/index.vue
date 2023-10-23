<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        全国预约挂号平台 ©2023 Created by
        <el-tooltip content="点击跳转到 github 主页"><el-link type="primary" :underline="false"
            href="https://github.com/JerryOAO"><img style="width: 15px" src="../../assets/imgs/github.png"
              alt="" />杰瑞</el-link></el-tooltip>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right {
      span {
        margin: 0 3px;
        font-size: 14px;
      }
    }
  }

}
</style>
