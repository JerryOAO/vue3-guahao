<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/imgs/挂号.png" alt="logo" />
        <p class="cursor" style="color: rgb(37, 119, 186)">全国统一预约挂号平台</p>
      </div>
      <div class="right">
        <p class="help cursor" v-if="!userStore.userInfo.name">帮助中心</p>
        <div class="help" v-else>
          <Icon class="icon" icon="emojione-v1:face-savoring-food" />&nbsp;
          <p class="help">{{ time }}好</p>
        </div>
        <p class="cursor" @click="login" v-if="!userStore.userInfo.name">登录/注册</p>
        <p v-else>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link help">
              {{ userStore.userInfo.name }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon></span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="实名认证"><el-icon>
                    <User />
                  </el-icon>实名认证</el-dropdown-item>
                <el-dropdown-item command="挂号订单"><el-icon>
                    <Tickets />
                  </el-icon>挂号订单</el-dropdown-item>
                <el-dropdown-item command="就诊人管理"><el-icon>
                    <FirstAidKit />
                  </el-icon>就诊人管理</el-dropdown-item>
                <el-dropdown-item @click="centerDialogVisible = true"><el-icon>
                    <SwitchButton />
                  </el-icon>退出登录</el-dropdown-item>
              </el-dropdown-menu>
              <!-- 确认退出框  -->
            </template>
          </el-dropdown>
        </p>
      </div>
    </div>
  </div>
  <el-dialog v-model="centerDialogVisible" width="20%" align-center :modal="false" :lock-scroll="false"
    :close-on-click-modal="false">
    <span>确定要退出账号吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="logout">
          确定
        </el-button>
      </span>
    </template>
    <template #header>
      <h1 style="font-weight: bold;">
        退出登录
      </h1>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from "@/store/modules/user.ts";
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { ArrowDown, User, SwitchButton, Tickets, FirstAidKit } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
let userStore = useUserStore();

let router = useRouter()
const goHome = () => {
  router.push('/home')
}
const login = () => {
  userStore.visiable = true
}
//判断time时间是早上/中午/下午/晚上
const time = ref('')
const now = new Date().getHours()
if (now < 9 && now > 6) {
  time.value = '早上'
} else if (now < 12 && now > 9) {
  time.value = '上午'
} else if (now < 14 && now > 12) {
  time.value = '中午'
} else if (now < 17 && now > 14) {
  time.value = '下午'
} else {
  time.value = '晚上'
}

//退出登录确认框
const centerDialogVisible = ref(false)
//退出登录
const logout = () => {
  centerDialogVisible.value = false
  userStore.logout()
  ElMessage.success('退出账号成功！')
  //刷新当前页面
  window.location.reload()
}

//el-dropdown-item点击事件
const handleCommand = (command: string) => {
  switch (command) {
    case '实名认证':
      router.push('/user/certification')
      break;
    case '挂号订单':
      router.push('/user/order')
      break;
    case '就诊人管理':
      router.push('/user/patient')
      break;
    case '退出登录':
      break;
  }
}
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .content {
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;

    // background-color: red;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-bottom: 10px;
        margin-right: 5px;
      }

      p {
        font-size: 20px;
        font-weight: bold;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;

      .help {
        display: flex;
        margin-right: 5px;

        .icon {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}

.cursor {
  cursor: pointer
}

.el-dropdown-link {
  cursor: pointer;
  color: red;
  font-size: 16px;
  // display: flex;
  // align-items: center;
}
</style>
