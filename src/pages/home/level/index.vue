<template>
  <div class="level">
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospitol">
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

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