<template>
  <di class="notice">
    <h1>{{hospitalStore.hospitalInfo.hospital?.hosname}}预约挂号须知</h1>
    <div class="top">为方便您早日就医康复，请您认真阅读预约挂号须知：</div>
    <div class="info">
      <div class="text">1、挂号时请提前了解医院的就诊时间和医生的出诊时间，以免错过就诊时机。</div>
      <div class="text">2、请您提前了解医院的挂号规定，包括挂号时间、挂号方式、挂号费用等，以便您能够顺利完成挂号手续。</div>
      <div class="text">3、在预约挂号时，请务必提供真实有效的个人信息，如姓名、身份证号码、联系电话等，以便医院能够及时联系您并保障您的就诊权益。</div>
      <div class="text">4、如果您需要取消预约挂号，请提前通知医院，并遵守医院的取消规定，以免影响其他患者的就诊。</div>
      <div class="text">5、如果您需要重新预约挂号，请提前与医院联系，以便医院能够为您安排合适的就诊时间和医生。</div>
      <div class="text">6、在挂号时，请注意医生的专业领域和就诊经验，选择适合自己的医生进行就诊，以获得更好的治疗效果。</div>
      <div class="text">7、在就诊前，请准备好相关的病历资料和检查报告，并按照医生的要求进行检查和准备，以便医生能够更好地为您诊治病情。</div>
    </div>
  </di>
</template>

<script setup lang="ts">
//引入仓库数据
import useDetailStore from "@/store/modules/hospitalDetail.ts";
let hospitalStore = useDetailStore();

</script>

<style scoped>
/* 字间距要求阅读舒适，h1居中，字体要大一些*/
.notice {
  padding: 20px;
  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .top {
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
  }
  .info {
    .text {
      margin: 10px 0;
      font-size: 15px;
      line-height: 1.3;
    }
  }
}


</style>