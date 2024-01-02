<template>
  <div>
    <span>{{ time }}秒后重新获取</span>
  </div>
</template>

<script setup lang="ts">
import {ref, watch } from 'vue'
//接受父组件传递过来的props->flag：用于控制计数器组件显示与隐藏
const time = ref<number>(5)
let props = defineProps(['flag'])
let $emit = defineEmits(['getFlag'])
watch(
  () => props.flag,
  () => {
    //开启定时器
    let timer = setInterval(() => {
      time.value--
      if (time.value == 0) {
        //触发父组件事件
        $emit('getFlag', false)
        //关闭定时器
        clearInterval(timer)
      }
    }, 1000);
  }, {
  immediate: true
})
</script>

<style scoped></style>