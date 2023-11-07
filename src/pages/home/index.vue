<template>
  <div class="home">
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索框 -->
    <Search />
    <h1>医院</h1>
    <el-row :gutter="20">
      <el-col :span="19">
        <!-- 医院等级子组件 -->
        <level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院结构卡片 -->
        <div class="hospitol">
          <Card
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          />
        </div>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50]"
          :background="true"
          layout="prev, pager, next, jumper,sizes,->,total"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="2">22</el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
// 首页轮播图
import Carousel from "./carousel/index.vue";
// 首页搜索
import Search from "./search/index.vue";
// 首页医院等级
import level from "./level/index.vue";
// 首页地区
import Region from "./region/index.vue";
// 首页医院结构卡片
import Card from "./card/index.vue";

import { ref, onMounted } from "vue";
//医院列表api
import { reqHospital } from "@/api/";

// 分页器页码
let pageNo = ref<number>(1);
// 一页展示x条数据
let pageSize = ref<number>(10);
// 分页总数
let total = ref<number>(0);
onMounted(() => {
  getHospital();
});

const hasHospitalArr = ref([]);
// 获取首页医院列表
const getHospital = async () => {
  let result: any = await reqHospital(pageNo.value, pageSize.value);
  console.log(result);
  if (result.code === 200) {
    console.log("result.data", result.data);
    hasHospitalArr.value = result.data.content;
    console.log("hasHospitalArr.value", hasHospitalArr.value);
    total.value = result.data.totalElements;
  }
};
//分页器页码发生变化时
const currentChange = () => {
  getHospital();
};
//分页器条数发生变化时
const sizeChange = () => {
  getHospital();
};
</script>

<style scoped lang="scss">
.home {
  h1 {
    color: #767687;
    font-weight: 900;
    margin-top: 10px;
  }

  .hospitol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 48%;
      margin: 10px 0px;
    }
  }
}
.el-pagination {
  margin-top: 20px;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
