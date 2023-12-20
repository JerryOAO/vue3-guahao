<template>
  <div class="register">
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
        <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData" alt="" />
      </div>
      <div class="right">
        <span>挂号规则</span>
        <div class="time">
          预约周期：{{ hospitalStore.hospitalInfo.bookingRule?.cycle }}天 放号时间:
          {{ hospitalStore.hospitalInfo.bookingRule?.releaseTime }} 停挂时间:
          {{ hospitalStore.hospitalInfo.bookingRule?.stopTime }}
        </div>
        <div class="address">
          具体地址：{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}
        </div>
        <div class="route">
          规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}
        </div>
        <div class="stoptime">
          退号时间：就诊前一工作日{{
            hospitalStore.hospitalInfo.bookingRule?.quitTime
          }}前取消
        </div>
        <div class="rule">预约挂号规则</div>
        <div class="ruleInfo" v-for="(item, index) in hospitalStore.hospitalInfo.bookingRule?.rule" :key="index">
          {{ index + 1 }}、{{ item }}
        </div>
      </div>
    </div>
    <!-- 每个科室数据 -->
    <div class="department">
      <div class="leftNav">
        <ul>
          <li @click="changeIndex(index)" v-for="(department, index) in hospitalStore.departmentArr"
            :key="department.depcode" :class="{ active: index == currentIndex }">
            {{ department.depname }}
          </li>
        </ul>
      </div>
      <div class="departmentInfo">
        <div class="showDepartment" v-for="(department) in hospitalStore.departmentArr" :key="department.depcode">
          <h1 class="cur">{{ department.depname }}</h1>
          <ul>
            <li @click="showLogin" v-for="(item) in department.children" :key="item.depcode">{{ item.depname }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入仓库数据
import useDetailStore from "@/store/modules/hospitalDetail.ts";
import { ref } from "vue";
import useUserStore from "@/store/modules/user.ts";
let userStore = useUserStore();

let hospitalStore = useDetailStore();
console.log("hospitalStore", hospitalStore);
let currentIndex = ref<number>(0);

const changeIndex = (index: number) => {
  currentIndex.value = index;
  //点击导航获取对应的科室
  let allH1 = document.querySelectorAll(".cur");
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth", // 平滑滚动
    block: "start", // 对齐方式
  });
};

const showLogin = () => {
  userStore.visiable = true;
};
</script>
<style scoped>
.register {
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
      height: 200px;
      border-radius: 10px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .right {
      margin-left: 20px;

      span,
      div {
        margin-bottom: 10px;
      }
    }
  }

  /* .department背景灰色，点击时白色*/
  .department {
    display: flex;
    margin: 20px 20px;

    .leftNav {
      width: 200px;
      height: 100%;

      /* border-radius: 10px; */
      ul {
        li {
          padding: 10px 20px;
          cursor: pointer;

          &:hover {
            background-color: #f5f5f5;
          }

          &.active {
            background-color: #f5f5f5;
            border-left: 4px solid red;
          }
        }
      }
    }
    /* departmentInfo和leftNav高度一致 */
    .departmentInfo {
      flex: 1;
      background-color: #f5f5f5;
      height: 500px;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      /* 每行显示3个showDepartment */
      .showDepartment {
        display: flex;
        flex-wrap: wrap;
        /* padding: 10px; */

        h1 {
          background-color: black;
          color: white;
          width: 100%;
          line-height: 30px;
          font-size: 25px;
          font-weight: bold;
        }

        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;

          li {
            width: 33.33%;
            padding: 10px 20px;
            cursor: pointer;
            flex-wrap: nowrap;
            &:hover {
              background-color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
