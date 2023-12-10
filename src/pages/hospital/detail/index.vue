<template>
  <div class="detail">
    <div class="top">
      <div class="title">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">
        <svg t="1698773627681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5215" width="15" height="15">
          <path
            d="M936.448 423.424c-16.384-23.552-48.128-35.328-99.84-35.328-28.672 0-59.392 3.072-88.576 6.144-20.48 2.048-39.936 4.096-53.248 4.096-10.752 0-19.968-0.512-28.16-2.048l-8.704-1.536 3.584-7.68c44.544-97.792 23.04-185.344 13.312-227.84l-0.512-1.536c-0.512-3.072-1.536-5.632-2.048-9.216-9.216-42.496-50.688-65.024-87.04-65.024-4.096 0-8.704 0.512-12.8 1.024-34.304 5.12-67.072 33.28-62.976 84.992 11.264 135.168-110.592 210.944-160.768 236.544-11.264-10.752-26.624-16.896-43.52-16.896H211.968c-35.328 0-64 28.672-64 64v383.488c0 35.328 28.672 64 64 64h93.696c16.384 0 31.232-6.144 42.496-16.384v0.512c38.4 0.512 101.888 5.12 158.72 10.24 54.272 4.096 105.984 8.704 133.12 8.704 57.856 0 129.536 0 185.344-36.352 49.664-32.768 63.488-120.832 75.264-199.168v-1.024c2.56-16.384 4.608-31.744 7.168-44.544 4.096-20.992 12.8-43.52 20.48-64.512 16.896-45.568 35.84-94.72 8.192-134.656zM309.76 832.512c0 4.096-3.584 7.68-7.68 7.68H215.552c-4.096 0-7.68-3.584-7.68-7.68V456.704c0-4.096 3.584-7.68 7.68-7.68h86.016c4.096 0 7.68 3.584 7.68 7.68v375.808z m558.592-299.52c-8.704 22.528-18.432 48.64-23.552 75.264-2.56 14.336-5.12 30.72-7.68 48.128-7.68 51.712-20.48 138.24-46.592 155.136-39.936 26.624-98.816 26.624-150.528 26.624-24.064 0-74.24-3.584-127.488-7.68h-0.512c-50.688-4.096-102.912-8.192-142.336-9.216v-353.28c51.712-25.088 218.624-120.32 203.264-302.592-1.024-14.848 3.584-15.872 8.704-16.384h3.584c10.752 0 22.528 5.632 25.088 14.336 0.512 3.072 1.536 7.168 2.56 11.776 9.728 39.936 27.648 115.2-14.848 197.632-9.728 18.432-9.728 38.4 0.512 54.784 14.848 23.552 47.104 35.84 95.744 35.84 16.384 0 36.352-2.048 60.416-4.608 26.624-2.56 56.32-6.144 82.432-6.144h4.608c27.136 0.512 36.864 4.608 40.448 6.656l1.024 0.512c8.192 12.288-3.584 43.008-14.848 73.216z"
            fill="#2C2C2C" p-id="5216"></path>
        </svg>
        <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData" alt="">
      </div>
      <div class="right">
        <div class="address">具体位置：{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}</div>
        <div class="route">规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}</div>
      </div>
    </div>
    <div class="detailContent">
      <h1>医院介绍</h1>
      <p>{{ hospitalStore.hospitalInfo.hospital?.intro }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入仓库数据
import useDetailStore from "@/store/modules/hospitalDetail.ts";
let hospitalStore = useDetailStore();
console.log('hospitalStore', hospitalStore)
</script>

<style scoped>
.detail {
  .top {
    display: flex;
    margin: 20px 20px;
    align-items: flex-end;

    .title {
      font-size: 20px;
      margin-right: 10px;
      font-weight: bold;
    }

    .level {
      display: flex;
      align-items: center;
      color: #7f7f7f;
    }

  }

  .content {
    display: flex;
    margin: 20px 20px;
    font-size: 15px;
    line-height: 1.3;

    .left {
      width: 200px;
      /* height: 200px; */
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .right {
      margin-left: 20px;

      .address {
        margin-bottom: 10px;
      }
    }
  }
  .detailContent{
    margin: 20px;
    h1{
      font-size: 20px;
      font-weight: bold;
    }
    p{
      margin-top: 10px;
      line-height: 1.4;
    }
  }
}</style>