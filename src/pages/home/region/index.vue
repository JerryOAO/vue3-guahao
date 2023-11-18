<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul class="regionInfo">
        <li :class="{active:regionFlag==''}" @click="changeRegion('')">全部</li>
        <li v-for="item in regionArr" :key="item.value" :class="{active:regionFlag==item.value}" @click="changeRegion(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api';
import { ref,onMounted } from 'vue';
import type { HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr } from '@/api/type';

let regionFlag = ref<string>('')
const changeRegion = (region:string) => {
  regionFlag.value = region
  $emit('getRegion',region)
}

let $emit = defineEmits(['getRegion'])


let regionArr = ref<HospitalLevelAndRegionArr>([])
onMounted( () => {
  getRegion()
});

const getRegion = async () => {
 let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
 if(result.code == 200){
   regionArr.value = result.data
   console.log('result11',result)
 }

};
</script>

<style scoped lang="scss">
.region {
  .content {
    display: flex;
    flex-wrap: wrap;

    .left {
      margin-right: 10px;
      // white-space: nowrap;
    }

    .regionInfo {
      display: flex;
      flex-wrap: wrap;
      width: 90%;

      li {
        margin-right: 25px;
        color: #767687;
        margin-bottom: 10px;

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
