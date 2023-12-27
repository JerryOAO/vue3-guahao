<template>
  <div>
    <el-card class="box-card">
      <div class="top">
        <div class="left">
          <span class="yibao">{{ user.isInsure == 1 ? "医保" : '自费' }}</span>
          <span class="username">{{user.name}}</span>
        </div>
        <div class="right">
          <el-button type="primary" size="small" :icon="Edit"></el-button>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>证件类型：{{ user.param.certificatesTypeString }}</li>
          <li>证件号码：{{ user.certificatesNo }}</li>
          <li>用户性别：{{ user.sex==0?'女士':'男士' }}</li>
          <li>出生日期：{{ user.birthdate }}</li>
          <li>手机号码：{{ user.phone }}</li>
          <li>婚姻状况：{{ user.isMarry==0?'未婚':'已婚' }}</li>
          <li>当前住址：{{ user.param.cityString }}</li>
          <li>详细地址：{{ user.param.fullAddress }}</li>
        </ul>
        <transition name="select">
          <div class="select" v-if="index===currentIndex">已选择</div>
        </transition>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
// 接收父组件传递的就诊人信息
defineProps(['user','index','currentIndex'])


</script>

<style scoped lang="scss">
::v-deep(.el-card__body) {
  padding: 0px;
}

.box-card {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ececec;
    padding: 15px;

    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .yibao {
        color: black;
        font-size: 12px;
        font-weight: bold;
        background-color: white;
        padding: 2px;
        border-radius: 2px;
      }

      .username {
        font-size: 15px;
        font-weight: bold;
        // color: #7f7f7f;
        margin-left: 5px;
      }
    }

    .right {
      .el-button {
        background-color: #409EFF;
        border-color: #409EFF;
      }
    }
  }

  .bottom {
    position: relative;
    z-index: 99;
    ul {
      display: flex;
      flex-direction: column;
      padding: 15px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        // color: #7f7f7f;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
    // .select居中
    .select{
      position: absolute;
      width: 150px;
      height: 150px;
      color: red;
      border-radius: 50%;
      border: 1px dashed red;
      text-align: center;
      line-height: 150px;
      font-weight: bold;
      opacity: 0.5;
      transform: rotate(35deg);
      z-index: -1;
      font-size: 30px;
      left: 50%;
      top: 50%;
      margin-left: -75px;
      margin-top: -75px;
    }
    .select-enter-from{
      opacity: 0;
    }
    .select-enter-active,
    .select-leave-active {
      transition: all 0.5s;
    }
    .select-enter,
    .select-leave-to {
      opacity: 0;
    }
    
  }
}</style>