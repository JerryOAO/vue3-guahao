<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>挂号订单</span>
        </div>
      </template>
      <el-form inline="true">
        <el-form-item label="就诊人">
          <el-select placeholder="请选择就诊人">
            <el-option label="测试"></el-option>
            <el-option label="你好"></el-option>
            <el-option label="杰瑞"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select placeholder="请选择订单状态">
            <el-option label="已完成"></el-option>
            <el-option label="未支付"></el-option>
            <el-option label="取消订单"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-table border :data="allOrderArr">
        <el-table-column label="就诊时间" align="center" prop="reserveDate"></el-table-column>
        <el-table-column label="医院" align="center" prop="hosname"></el-table-column>
        <el-table-column label="科室" align="center" prop="depname"></el-table-column>
        <el-table-column label="医生" align="center" prop="title"></el-table-column>
        <el-table-column label="服务费" align="center" prop="amount"></el-table-column>
        <el-table-column label="就诊人" align="center" prop="patientName"></el-table-column>
        <el-table-column label="订单状态" align="center" prop="param.orderStatusString">
          <template #="{row}">
            <!-- 判断param.orderStatusString '已支付'绿色，'预约成功，待支付'蓝色,'取消预约'红色-->
            <!-- <span :style="{ color: row.param.orderStatusString == '已支付' ? 'green' : 'red' }">{{row.param.orderStatusString}}</span> -->
            <span :style="{ color: row.param.orderStatusString == '已支付' ? 'green' : row.param.orderStatusString == '预约成功，待支付' ? 'blue' : 'red' }">{{row.param.orderStatusString}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #="{row}">
            <el-button type="text" size="mini" @click="goDetail(row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      small="small"
      :background="true"
      layout="prev, pager, next, jumper,sizes, total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {reqOrderInfo} from '@/api/user'
import type { OrderInfoResponseData,Records } from '@/api/user/type';

let router = useRouter()
let pageNo = ref<number>(1)
let pageSize = ref<number>(5)
let patientId = ref<string>('')
let orderStatus = ref<string>('')
let allOrderArr = ref<Records>([])
let total = ref<number>(0)

onMounted(() => {
  getOrderInfo()
})

const getOrderInfo = async()=>{
  let res:OrderInfoResponseData = await reqOrderInfo(pageNo.value,pageSize.value,patientId.value,orderStatus.value)
  if(res.code==200){
    allOrderArr.value = res.data.records
    total.value = res.data.total
  }
}
const goDetail = (row:any)=>{
  router.push({path:'/user/order',query:{orderId:row.id}})
}
const handleCurrentChange = (val:number)=>{
  pageNo.value = val
  getOrderInfo()
}
const handleSizeChange = (val:number)=>{
  pageSize.value = val
  getOrderInfo()
}
</script>

<style scoped lang="scss">
.el-pagination{
  margin-top: 20px;
}
</style>