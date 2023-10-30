<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul class="regionInfo">
        <li class="active">全部</li>
        <li v-for="item in 20" :key="item">昌平区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

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
          color: #91d6ff;
        }

        &:hover {
          color: #91d6ff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>