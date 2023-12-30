<template>
  <div>
    <div v-if="route.query.orderId">
      <Detail />
    </div>
    <div v-else>
      <OrderAll />
    </div>
  </div>
</template>

<script setup lang="ts">
import Detail from './components/detail.vue'
import OrderAll from './components/orderAll.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>

</style>