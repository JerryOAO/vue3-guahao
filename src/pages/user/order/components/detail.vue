<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>挂号详情</span>
        </div>
      </template>
      <div class="top">
        <el-tag class="mx-1" effect="dark" type="success">
          <Icon icon="tabler:check" />{{ orderInfo.param?.orderStatusString }}
        </el-tag>
        <span>
          <Icon icon="tdesign:logo-wechat-stroke" width="20px" height="15px" />微信关注"预约挂号""快速挂号"
        </span>
      </div>
      <el-divider />
      <div class="content">
        <div class="left">
          <el-descriptions border column="1">
            <el-descriptions-item label="就诊人信息">{{ orderInfo.patientName }}</el-descriptions-item>
            <el-descriptions-item label="就诊日期">{{ orderInfo.reserveDate }}</el-descriptions-item>
            <el-descriptions-item label="就诊医院">{{ orderInfo.hosname }}</el-descriptions-item>
            <el-descriptions-item label="就诊科室">{{ orderInfo.depname }}</el-descriptions-item>
            <el-descriptions-item label="医生职称">{{ orderInfo.title }}</el-descriptions-item>
            <el-descriptions-item label="医事服务费">{{ orderInfo.amount }}</el-descriptions-item>
            <el-descriptions-item label="挂号单号">{{ orderInfo.outTradeNo }}</el-descriptions-item>
            <el-descriptions-item label="挂号时间">{{ orderInfo.createTime }}</el-descriptions-item>
          </el-descriptions>
          <el-button>取消预约</el-button>
          <el-button type="primary">支付</el-button>
        </div>
        <div class="right">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span>挂号详情</span>
              </div>
            </template>
            <p>1.请确认就诊人信真是否准确，若填写错读得无法取号就诊，损失由本人承担；</p>
            <p>2.【取号】就诊当天需在 <span style="font-weight: bold;">{{orderInfo.reserveDate}} 早09:00前</span> 在医院取号，未取号视为爽约，该号不退不换</p>
            <p>3.【退号】在 <span style="font-weight: bold;">{{orderInfo.reserveDate}} 15:30前</span> 可在线退号，逾期将不可办理退号退费；</p>
            <p>4.北京114预约挂号支持自费惠者使用身份证预约，同时支持北京市医保惠者使用北京社保卡在平预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到取号</p>
            <p>5.请注意北市医保惠者在住院期问不能使用社保卡在门诊取号，</p>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted,ref } from 'vue';
import { reqGetOrderInfo } from '@/api/user';
import type { OrderResponseData } from '@/api/user/type';
import { useRoute } from 'vue-router'

let route = useRoute()
let orderInfo = ref<any>({})
onMounted(() => {
  getOrderInfo()
})

const getOrderInfo =async () => {
  let res:OrderResponseData = await reqGetOrderInfo(route.query.orderId as string)
  if(res.code === 200){
    orderInfo.value = res.data
  }
}
</script>

<style scoped lang="scss">
.box-card {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    // align-items: center;

    .left {
      flex: 4;

      .el-button {
        margin-top: 20px;
      }
    }

    .right {
      flex: 6;
      margin-left: 15px;

      .box-card {
        p {
          font-size: 13px;
          line-height: 28px;
        }

        p:nth-child(2) {
          color: #f56c6c;
        }
      }
    }
  }
}
</style>