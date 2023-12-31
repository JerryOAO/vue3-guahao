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
          <div class="btn" v-if="orderInfo.orderStatus==0 || orderInfo.orderStatus==1">
            <el-popconfirm title="确定要取消预约？" :icon="InfoFilled" icon-color="red" width="180px" @confirm="cancel">
              <template #reference>
                <el-button>取消预约</el-button>
              </template>
            </el-popconfirm>
            <el-button type="primary" v-if="orderInfo.orderStatus==0" @click="pay">支付</el-button>
          </div>
        </div>
        <div class="right">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span>挂号详情</span>
              </div>
            </template>
            <p>1.请确认就诊人信真是否准确，若填写错读得无法取号就诊，损失由本人承担；</p>
            <p>2.【取号】就诊当天需在 <span style="font-weight: bold;">{{ orderInfo.reserveDate }} 早09:00前</span>
              在医院取号，未取号视为爽约，该号不退不换
            </p>
            <p>3.【退号】在 <span style="font-weight: bold;">{{ orderInfo.reserveDate }} 15:30前</span> 可在线退号，逾期将不可办理退号退费；</p>
            <p>4.北京114预约挂号支持自费惠者使用身份证预约，同时支持北京市医保惠者使用北京社保卡在平预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到取号</p>
            <p>5.请注意北市医保惠者在住院期问不能使用社保卡在门诊取号，</p>
          </el-card>
        </div>
      </div>
    </el-card>
    <!-- 支付弹框 -->
    <el-dialog
    v-model="centerDialogVisible"
    title="微信支付"
    width="30%"
    align-center
    @close="closeDialog"
  >
    <div class="qrocde">
      <img :src="imgUrl" alt="">
      <p>请使用微信扫一扫</p>
      <p>扫描二维码支付</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">关闭</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
  
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import { reqGetOrderInfo, reqCancelOrder,reqQRCODE,reqPayStatus } from '@/api/user';
import type { OrderResponseData,QrcodeResponseData } from '@/api/user/type';
import { useRoute } from 'vue-router'
import { InfoFilled } from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus';
// 二维码插件
//@ts-ignore
import QRCode from 'qrcode'



let route = useRoute()
let orderInfo = ref<any>({})
onMounted(() => {
  getOrderInfo()
})

const getOrderInfo = async () => {
  let res: OrderResponseData = await reqGetOrderInfo(route.query.orderId as string)
  if (res.code === 200) {
    orderInfo.value = res.data
  }
}

//取消订单
const cancel = async () => {
  try {
    await reqCancelOrder(route.query.orderId as string)
    getOrderInfo()
  } catch (error) {
    ElMessage({
      message: '取消预约失败',
      type: 'error'
    })
  }
}
// 支付弹窗
const centerDialogVisible = ref(false)
const imgUrl = ref<string>('')
const timer = ref<any>()
const closeDialog = () => {
  centerDialogVisible.value = false
  clearInterval(timer.value)
}
const pay = async () => {
  centerDialogVisible.value = true
  let res:QrcodeResponseData = await reqQRCODE(route.query.orderId as string)
  imgUrl.value = await QRCode.toDataURL(res.data.codeUrl)
  //定时器查询服务器是否支付成功reqPayStatus
  timer.value = setInterval(async()=>{
    let res = await reqPayStatus(route.query.orderId as string)
    if(res.data){
      ElMessage({
        message: '支付成功',
        type: 'success'
      })
      getOrderInfo()
      centerDialogVisible.value = false
      clearInterval(timer)
    }
  },2000)
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
// 支付弹窗
.qrocde {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    margin: 10px 0;
  }
}
</style>