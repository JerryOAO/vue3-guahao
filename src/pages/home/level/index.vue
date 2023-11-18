<template>
  <div class="level">
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospitol">
        <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
        <li v-for="level in levelArr" :key="level.value" :class="{active:activeFlag==level.value}" @click="changeLevel(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api';
import { ref,onMounted } from 'vue';
import type { HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr } from '@/api/type';
let levelArr = ref<HospitalLevelAndRegionArr>([])
//挂载组件
onMounted(async () => {
  getLevel()
});
//获取医院等级数据
const getLevel = async () => {
 let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
 console.log('result',result)
 if(result.code === 200){
   levelArr.value = result.data
 }
};
//控制医院等级高亮响应式数据
let activeFlag = ref<string>('')
//点击切换医院等级
const changeLevel = (level:string) => {
  activeFlag.value = level
  //触发自定义事件：将医院等级参数传给父
  $emit('getLevel',level)
}

let $emit = defineEmits(['getLevel'])
</script>

<style scoped lang="scss">
.level {
  margin: 25px 0px;

  .content {
    display: flex;
    margin: 10px 0;

    .left {
      margin-right: 10px;
    }

    .hospitol {
      display: flex;

      li {
        margin-right: 25px;
        color: #767687;

        &.active {
          color: #79bbff;
        }

        &:hover {
          color: #79bbff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
