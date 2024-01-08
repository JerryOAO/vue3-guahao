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
        <Visitor @click="changeIndex(index)" v-for="(user, index) in userArr" :key="user.id" class="item cursor"
          :user="user" :index="index" :currentIndex="currentIndex" />
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
          {{ doctorArr.workDate }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              就诊医院
            </div>
          </template>
          {{ doctorArr.param?.hosname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              就诊科室
            </div>
          </template>
          {{ doctorArr.param?.depname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生姓名
            </div>
          </template>
          {{ doctorArr.docname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生职称
            </div>
          </template>
          {{ doctorArr.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医生专长
            </div>
          </template>
          {{ doctorArr.skill }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              医事服务费
            </div>
          </template>
          <span style="color: red;">{{ doctorArr.amount }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <div class="btn">
      <el-button type="primary" size="large" :disabled="currentIndex == -1 ? true : false" @click="submitOrder">确认挂号</el-button>
      <div class="worring" v-if="currentIndex == -1 ? true : false">还未选择就诊人</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { reqGetUser, reqGetDoctor } from '@/api';
import { reqSubmitOrder } from '@/api/user'
import { SubmitOrder } from '@/api/user/type'
import { ref, onMounted } from 'vue';
import { UserArr, UserResponseData, ScheduleResponseData } from '@/api/type';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter()
//已选择逻辑处理
let currentIndex = ref<number>(-1)
const changeIndex = (index: number) => {
  currentIndex.value = index
}

const userArr = ref<UserArr>([])
const doctorArr = ref<any>({})
let route = useRoute()
onMounted(async () => {
  fetchUserData()
  fetchDoctorData()
})
const fetchUserData = async () => {
  const res: UserResponseData = await reqGetUser();
  if (res.code === 200) {
    userArr.value = res.data
  }
}
const fetchDoctorData = async () => {
  const res: ScheduleResponseData = await reqGetDoctor(route.query.docId as string);
  console.log('res1', res)
  if (res.code === 200) {
    doctorArr.value = res.data
  }
}
//提交订单
const submitOrder = async () => {
  //医院编号
  let hoscode = doctorArr.value.hoscode
  //医生的ID
  let scheduleId = doctorArr.value.id
  //就诊人的ID
  let patientId = userArr.value[currentIndex.value].id

  let res:SubmitOrder = await reqSubmitOrder(hoscode, scheduleId, patientId)
  if(res.code === 200){
    router.push({path:'/user/order',query:{orderId:res.data}})
    ElMessage.success('挂号成功')
  }else{
    ElMessage({
      type:'error',
      message:res.message
    })
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

  .box-card_bottom {
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

    .worring {
      color: red;
      margin-left: 20px;
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
    }
  }
}</style>