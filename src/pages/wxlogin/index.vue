<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { SET_TOKEN } from '@/utils/user';

let route = useRoute();
SET_TOKEN(JSON.stringify(route.query));
</script>

<style scoped>

</style>