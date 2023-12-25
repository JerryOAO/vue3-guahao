<template>
  <div class="wrap">
    <!-- 顶部结构 -->
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line">/</div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <div class="line">/</div>
      <div class="hosdeparment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1 class="time">{{ workData.baseMap?.workDateString }}</h1>
      <div class="container">
        <div class="item" :class="{ active: item.status == -1 || item.availableNumber == -1 }"
          v-for="item in workData.bookingScheduleList" :key="item">
          <div class="top">{{ item.workDate }} {{ item.dayOfWeek }}</div>
          <div class="bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{
                item.availableNumber == -1 ? "预约满人" : `有号(${item.availableNumber})`
              }}
            </div>
            <div v-if="item.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination v-model:current-page="pageNo" @current-change="fetchWorkData" small background
        layout="prev, pager, next" :total="workData.total" class="pagination" />
    </div>
    <!-- 医生预约 -->
    <div class="bottom">
      <!-- 即将放号的时间 -->
      <div class="aboutTo">
        <span>2023年12月25日 03:26:21</span>
        <span>即将放号</span>
      </div>
      <!-- 展示医生的详情 -->
      <div class="doctor">
        <div class="morning">
          <Icon icon="meteocons:time-late-morning-fill" />上午预约
        </div>
        <div class="doc_info">
          <!-- 左侧医生名字|技能 -->
          <div class="left">
            <div class="info">
              <span>副主任医师</span>
              <span>|</span>
              <span>杰瑞</span>
            </div>
            <div class="skill">
              <span>擅长：儿科常见病、多发病的诊治</span>
            </div>
          </div>
          <!-- 右侧挂号费用 -->
          <div class="right">
            <span>￥45</span>
            <el-button type="primary">剩余6</el-button>
          </div>
        </div>
        <div class="afternoon">
          <Icon icon="meteocons:time-late-afternoon-fill" />
          下午预约
        </div>
        <div class="doc_info">
          <!-- 左侧医生名字|技能 -->
          <div class="left">
            <div class="info">
              <span>副主任医师</span>
              <span>|</span>
              <span>杰瑞</span>
            </div>
            <div class="skill">
              <span>擅长：儿科常见病、多发病的诊治</span>
            </div>
          </div>
          <!-- 右侧挂号费用 -->
          <div class="right">
            <span>￥45</span>
            <el-button type="primary">剩余9</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqHospitalWork } from "@/api";
import { useRoute } from "vue-router";
import { HospitalWorkData } from "@/api/type";
import { Icon } from "@iconify/vue";
//分页器
let pageNo = ref<number>(1);
let limit = ref<number>(6);
// 医院科室挂号数据
let workData = ref<any>({});
let route = useRoute();
onMounted(() => {
  console.log(11);
  fetchWorkData();
});
const fetchWorkData = async () => {
  let result: HospitalWorkData = await reqHospitalWork(
    pageNo.value,
    limit.value,
    route.query.hoscode as string,
    route.query.depcode as string
  );
  console.log("result.data", result.data);
  if (result.code == 200) {
    workData.value = result.data;
    console.log("result.data", result.data);
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.wrap {
  padding: 20px;

  .top {
    font-size: 20px;
    display: flex;
    font-weight: bold;

    .line {
      margin: 0 10px;
    }
  }

  .center {
    /* margin: 20px 0px; */
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .time {
      margin-top: 30px;
      font-size: 20px;
      font-weight: bold;
    }

    .container {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .item {
        background-color: rgb(232, 230, 230);
        border: black solid 2px;
        width: 130px;
        height: 80px;
        margin: 5px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        transition: all 0.3s;

        &.active {
          background-color: #cecece;
          border: #cecece dashed 3px;
          opacity: 0.5;
          pointer-events: none;

          .top {
            background-color: #cecece;
          }
        }

        .top {
          border-radius: 10px 10px 0px 0px;
          width: 100%;
          height: 30px;
          font-size: 13px;
          background-color: #30c0f5;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bottom {
          font-size: 15px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
      }

      .item:hover {
        cursor: pointer;
        transform: translateY(-3px);
      }
    }
  }

  .bottom {
    .aboutTo {
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      margin-top: 20px;

      span:nth-child(1) {
        color: #30c0f5;
      }

      span:nth-child(2) {
        color: #ff0000;
      }
    }

    .doctor {
      .morning {
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: 900;
      }

      .doc_info {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
        border-bottom: 2px solid #ccc;
        padding-bottom: 20px;

        .left {
          .info {
            display: flex;
            align-items: center;

            span {
              margin-right: 10px;
              color: #30c0f5;
            }
          }

          .skill {
            margin-top: 20px;
          }
        }

        .right {
          display: flex;
          align-items: center;

          span {
            font-size: 20px;
            font-weight: 900;
            margin-right: 40px;
          }
        }
      }

      .afternoon {
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: 900;
      }

      .iconify {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
