<template>
  <div>
    <el-card class="box-card">
      <div class="top">
        <div class="left">
          <span class="yibao">医保</span>
          <span class="username">杰瑞</span>
        </div>
        <div class="right">
          <el-button type="primary" size="small" :icon="Edit"></el-button>
        </div>
      </div>
      <div class="bottom">底部</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'


</script>

<style scoped lang="scss">
::v-deep(.el-card__body){
  padding: 0px;
}
  .box-card{
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: red;
      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .yibao{
          color: black;
          font-size: 12px;
          font-weight: bold;
          background-color: white;
          padding: 2px;
        }
        .username{
          font-size: 15px;
          font-weight: bold;
          color: #7f7f7f;
          margin-left: 5px;
        }
      }
      .right{
        .el-button{
          background-color: #409EFF;
          border-color: #409EFF;
        }
      }
    }
  }
</style>