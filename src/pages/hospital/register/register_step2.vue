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
        <Visitor v-for="user in userArr" :key="user.id" class="item" :user="user"/>
      </div>
    </el-card>
    <el-card class="box-card_bottom">
      <!--卡片头部  -->
      <template #header>
        <div class="card-header">
          <span style="font-weight: bold;">挂号信息</span>
        </div>
      </template>
      <!-- 挂号信息 -->
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              就诊日期
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              就诊医院
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              就诊科室
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生姓名
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生职称
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生专长
            </div>
          </template>
          xxxxxxxx
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医事服务费
            </div>
          </template>
          <span style="color: red;">100</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <div class="btn">
      <el-button type="primary" size="large">确认挂号</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import Visitor from './visitor.vue'
import { reqGetUser } from '@/api';
import { ref, onMounted } from 'vue';
import { UserArr,UserResponseData } from '@/api/type';

const userArr = ref<UserArr>([])
onMounted(async () => {
  fetchUserData()
})
const fetchUserData = async () => {
  const res:UserResponseData = await reqGetUser();
  if (res.code === 200) {
    userArr.value = res.data
  }
}
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
  .box-card_bottom{
    margin-top: 20px; 
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .el-button {
      width: 200px;
    }
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