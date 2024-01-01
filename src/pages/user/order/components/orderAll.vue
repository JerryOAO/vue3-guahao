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
      <el-table border>
        <el-table-column label="就诊时间"></el-table-column>
        <el-table-column label="医院"></el-table-column>
        <el-table-column label="科室"></el-table-column>
        <el-table-column label="医生"></el-table-column>
        <el-table-column label="服务费"></el-table-column>
        <el-table-column label="就诊人"></el-table-column>
        <el-table-column label="订单状态"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
      <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      small="small"
      :disabled="disabled"
      :background="true"
      layout="prev, pager, next, jumper,sizes, total"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import {reqOrderInfo} from '@/api/user'
import type { OrderInfoResponseData,Records } from '@/api/user/type';

let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
let patientId = ref<string>('')
let orderStatus = ref<string>('')

onMounted(() => {
  getOrderInfo()
})

const getOrderInfo = async()=>{
  let res:OrderInfoResponseData = await reqOrderInfo(pageNo.value,pageSize.value,patientId.value,orderStatus.value)
  console.log('res',res)
}
</script>

<style scoped></style>