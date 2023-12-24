<template>
  <div class="login_container">
    <!-- 登录框 -->
    <el-dialog v-model="userStore.visiable" title="用户登录" align-center @close="close">
      <el-row>
        <el-col :span="12">
          <div class="login">
            <div v-show="tag == 0">
              <el-form :model="loginParam" :rules="rules" ref="form">
                <el-form-item prop="phone">
                  <el-input :prefix-icon="User" placeholder="请输入手机号" v-model="loginParam.phone"></el-input>
                </el-form-item>
                <el-form-item class="captchas" prop="code">
                  <el-input class="captcha" :prefix-icon="Iphone" placeholder="请输入短信验证码"
                    v-model="loginParam.code"></el-input>
                  <el-button :disabled="!isPhone || flag" @click="getCode" type="">
                    <countDown v-if="flag" :flag="flag" @getFlag="getFlag" />
                    <span v-else>获取验证码</span>
                  </el-button>
                </el-form-item>
                <div class="bottom">
                  <el-button type="primary" style="width:100%" @click="login">登录</el-button>
                  <p class="cursor" style="padding: 0px; color:black !important;font-weight: bold;margin-bottom: 5px;" @click="changeTag">
                    微信扫码登录</p>
                  <svg @click="changeTag" t="1702391924288" class="icon cursor" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4296" width="30" height="30">
                    <path
                      d="M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m107.91-626.371H640c-20.09-94.744-115.566-162.962-225.304-162.962-124.002 0-222.696 86.04-222.696 198.607 0 65.097 34.572 115.492 89.43 156.94l-23.114 71.12 77.995-41.448a354.748 354.748 0 0 0 77.97 11.8h20.114a133.608 133.608 0 0 1-5.851-47.47 193.122 193.122 0 0 1 57.466-134.412 181.37 181.37 0 0 1 133.096-52.175h0.804z m-115.273-56.296c15.848 0 28.696 14.288 28.696 31.915s-12.848 31.915-28.696 31.915c-17.652 1.95-33.402-12.313-35.304-31.94 0-22.284 17.457-31.89 34.719-31.89h0.585z m-171.032 63.878c-17.555 1.463-33.012-12.653-34.938-31.89 1.926-19.212 17.383-33.329 34.938-31.89 16.042 0 29.062 14.287 29.062 31.915 0 17.603-13.02 31.89-29.062 31.89zM832 574.805c0-92.233-90.136-169.472-192-169.472-107.764 0-192 77.24-192 169.448 0 92.257 84.456 169.496 192 169.496a264.24 264.24 0 0 0 66.828-11.873L767.586 768l-17.408-59.538c49.42-35.596 81.017-83.286 81.017-133.852l0.805 0.195zM573.562 554.52c-10.435 0-18.895-9.484-18.895-21.187s8.46-21.211 18.895-21.211c11.727-1.39 22.308 7.997 23.771 21.114-1.39 13.214-11.97 22.698-23.771 21.284z m128 0.098c-10.435 0-18.895-9.509-18.895-21.212 0-11.751 8.46-21.26 18.895-21.26 11.727-1.414 22.308 7.997 23.771 21.139-2.194 12.921-12.58 22.04-24.259 21.333h0.488z"
                      fill="#0ABC64" p-id="4297"></path>
                  </svg>
                </div>
              </el-form>
            </div>
            <div class="wx" v-show="tag == 1">
              <div id="login_container"></div>
              <div class="bottom" @click="changeTag">
                <p class="cursor" style="padding: 0px; color:black !important;font-weight: bold;">← 返回短信验证登录</p>
                <svg t="1703341384820" class="icon cursor" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="16453" width="30" height="30">
                  <path
                    d="M512 0c283.105882 0 512 228.894118 512 512s-228.894118 512-512 512S0 795.105882 0 512 228.894118 0 512 0z m0 256c-144.564706 0-265.035294 102.4-265.035294 228.894118 0 75.294118 42.164706 141.552941 105.411765 183.717647v99.388235l78.305882-51.2c6.023529-3.011765 12.047059-9.035294 18.070588-12.047059 21.082353 3.011765 42.164706 6.023529 63.247059 6.02353 144.564706 0 265.035294-102.4 265.035294-228.894118 0-123.482353-120.470588-225.882353-265.035294-225.882353z m-111.435294 192.752941c18.070588 0 36.141176 15.058824 36.141176 36.141177 0 18.070588-15.058824 36.141176-36.141176 36.141176-9.035294 0-18.070588-3.011765-24.094118-9.035294-6.023529-6.023529-9.035294-15.058824-9.035294-24.094118-3.011765-21.082353 12.047059-39.152941 33.129412-39.152941z m117.458823 0c18.070588 0 36.141176 15.058824 36.141177 36.141177 0 18.070588-15.058824 36.141176-36.141177 36.141176-9.035294 0-18.070588-3.011765-24.094117-9.035294-6.023529-6.023529-9.035294-15.058824-9.035294-24.094118-3.011765-21.082353 12.047059-39.152941 33.129411-39.152941z m117.458824 0c18.070588 0 36.141176 15.058824 36.141176 36.141177 0 18.070588-15.058824 36.141176-36.141176 36.141176-9.035294 0-18.070588-3.011765-24.094118-9.035294-6.023529-6.023529-9.035294-15.058824-9.035294-24.094118-3.011765-21.082353 12.047059-39.152941 33.129412-39.152941z"
                    fill="#ACB8C4" p-id="16454"></path>
                </svg>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="top">
            <div class="item">
              <img src="../../assets/imgs/code_app.png" alt="">
              <svg t="1702398983136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4280" width="20" height="20">
                <path
                  d="M867.265306 867.265306c-3.134694 0-6.791837-1.044898-9.92653-2.612245l-54.857143-28.734694c-39.183673 20.37551-83.069388 31.346939-128.522449 31.346939-141.061224 0-256-102.922449-256-229.877551s114.938776-229.877551 256-229.877551 256 102.922449 256 229.877551c0 50.677551-18.808163 100.310204-53.289796 140.538776l10.971428 65.306122c1.567347 7.836735-2.089796 15.673469-8.359183 20.37551-3.657143 2.089796-7.836735 3.657143-12.016327 3.657143z m-193.306122-417.959184c-118.073469 0-214.204082 84.114286-214.204082 188.081633s96.130612 188.081633 214.204082 188.081633c42.318367 0 83.069388-10.971429 118.073469-31.346939 6.269388-3.657143 14.106122-3.657143 20.37551-0.522449l27.167347 14.106122-5.746939-33.436734c-1.044898-6.269388 1.044898-13.061224 5.22449-17.763266 31.346939-33.436735 49.110204-76.277551 49.110204-119.640816 0-103.444898-96.130612-187.559184-214.204081-187.559184z"
                  fill="#333333" p-id="4281"></path>
                <path
                  d="M579.918367 579.395918m-31.346938 0a31.346939 31.346939 0 1 0 62.693877 0 31.346939 31.346939 0 1 0-62.693877 0Z"
                  fill="#333333" p-id="4282"></path>
                <path
                  d="M768 579.395918m-31.346939 0a31.346939 31.346939 0 1 0 62.693878 0 31.346939 31.346939 0 1 0-62.693878 0Z"
                  fill="#333333" p-id="4283"></path>
                <path
                  d="M292.571429 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z"
                  fill="#333333" p-id="4284"></path>
                <path
                  d="M512 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z"
                  fill="#333333" p-id="4285"></path>
                <path
                  d="M166.138776 709.485714c-4.179592 0-8.881633-1.567347-12.538776-4.179592-6.269388-4.702041-9.404082-12.538776-8.359184-20.37551l14.106123-81.502041C117.028571 554.840816 94.040816 494.759184 94.040816 433.110204 94.040816 280.555102 232.489796 156.734694 402.285714 156.734694c80.979592 0 157.257143 27.689796 215.24898 78.889796 58.514286 51.2 91.428571 119.640816 92.995918 193.306122 0 5.746939-2.089796 11.493878-6.269388 15.67347s-9.926531 6.269388-15.673469 5.746938c-5.22449-0.522449-9.926531-0.522449-14.106122-0.522449-118.073469 0-214.204082 84.114286-214.204082 188.081633 0 14.106122 2.089796 28.734694 5.746939 42.840816 1.567347 5.746939 0.522449 12.016327-2.612245 17.240817s-8.881633 8.359184-14.628572 8.881632c-15.15102 2.089796-30.302041 3.134694-45.453061 3.134694-55.902041 0-109.714286-13.583673-157.257143-38.661224l-68.963265 36.571428c-4.179592 0.522449-7.836735 1.567347-10.971428 1.567347z m78.889795-83.591836c3.657143 0 7.314286 1.044898 10.44898 2.612244 48.587755 28.212245 106.057143 41.795918 164.571429 38.138776-1.567347-9.926531-2.089796-19.853061-2.089796-29.779592 0-124.865306 111.281633-226.742857 249.208163-229.877551-14.628571-117.028571-128.522449-208.979592-264.881633-208.979592-146.808163 0-266.44898 105.012245-266.448979 234.579592 0 54.334694 21.942857 107.62449 61.12653 149.420408 4.702041 4.702041 6.269388 11.493878 5.22449 17.763266l-8.359184 50.155102 41.795919-21.942858c3.134694-1.044898 6.269388-2.089796 9.404081-2.089795z"
                  fill="#333333" p-id="4286"></path>
              </svg>
              <p>微信扫一扫关注</p>
              <p>“快速预约挂号”</p>
            </div>
            <div class="item">
              <img src="../../assets/imgs/code_app.png" alt="">
              <svg t="1702574427246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4386" width="20" height="20">
                <path
                  d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                  p-id="4387"></path>
              </svg>
              <p>扫一扫下载</p>
              <p>“预约挂号”</p>
            </div>
          </div>
          <p class="tip"><img src="../../assets/imgs/挂号.png" alt="logo" />官方指定平台</p>
          <p class="tip">快速挂号，安全放心</p>
        </el-col>
      </el-row>
      <template #footer>
        <div class="footer">
          <el-button @click="closeLogin">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import countDown from "@/components/countdown/index.vue";
//获取userStore仓库数据
import useUserStore from "@/store/modules/user.ts";
import { User, Iphone } from '@element-plus/icons-vue'
import { ref, reactive, computed } from "vue";
import { ElMessage } from 'element-plus'
import { reqWxLogin } from '@/api/index.ts'
import type { WXLoginResponseData } from '@/api/type.ts'
let userStore = useUserStore();
let tag = ref<number>(0); // 0:手机号登录 1:微信登录
const changeTag = async () => {
  tag.value = tag.value == 0 ? 1 : 0;
  //请求微信登录接口参数
  let redirect_URL = encodeURIComponent(window.location.origin + '/wxlogin')
  let wxloginParams: WXLoginResponseData = await reqWxLogin(redirect_URL)
  console.log('wxloginParams',wxloginParams)
  //生成微信二维码登录页面
  let wxstyle = "LmltcG93ZXJCb3ggLnFyY29kZSB7DQogIGJvcmRlcjogbm9uZTsNCiAgd2lkdGg6IDEzMHB4Ow0KICBoZWlnaHQ6IDEzMHB4Ow0KfQ=="
  let href = "data:text/css;base64," + wxstyle;
  //@ts-ignore
  new WxLogin({
    self_redirect: false,
    id: "login_container",
    appid: wxloginParams.data.appid,
    scope: "snsapi_login",
    redirect_uri: wxloginParams.data.redirectUri,
    style: "black",
    state: "syt-http://localhost:5173/wxlogin/",
    // state:wxloginParams.data.state,
    href: href
  });
}
const closeLogin = () => {
  userStore.visiable = false;
}
//获取验证码
let loginParam = reactive({
  phone: '',
  code: ''
})
let isPhone = computed(() => {
  return /^1[3456789]\d{9}$/.test(loginParam.phone)
})

// flag 显示获取验证码按钮  flase开始倒计时  true显示获取验证码
let flag = ref<boolean>(false);
const changeFlag = async () => {
  flag.value = true;
}
const getFlag = (val: boolean) => {
  flag.value = val;
}

const getCode = async () => {
  changeFlag()
  try {
    await userStore.getCode(loginParam.phone)
    loginParam.code = userStore.captcha
  } catch (error) {
    //获取验证码失败
    console.log('error', error)
    ElMessage({
      message: error as string,
      type: 'error',
    })
  }
}
//登录
const login = async () => {
  //判断校验规则是否通过，如果不通过，用ElMessage提示错误信息
  await form.value.validate()
  //登录成功：顶部组件展示用户名字、登录框关闭
  //登录失败：弹出登录失败错误信息
  try {
    await userStore.userLogin(loginParam)
    closeLogin()
  } catch (error) {
    //登录失败
    console.log('error', error)
    ElMessage({
      message: error as string,
      type: 'error',
    })
  }
}

//表单校验规则
let form = ref<any>()
const rules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '验证码格式不正确', trigger: 'blur' }
  ]
}
//登录框关闭时的回调
const close = () => {
  //重置表单
  form.value.resetFields()
}

//二维码登录

</script>

<style scoped>
::v-deep .el-dialog__body {
  border-top: 1px solid #d8d8da;
  border-bottom: 1px solid #d8d8da;
}

.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login {
  padding: 20px;
  border: 1px solid #ebeef5;

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 20px;
    }
  }

  .wx {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 5px 0;
    }
  }
}

.top {
  display: flex;
  justify-content: space-around;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 130px;
      height: 130px;
    }

    p {
      margin: 5px 0;
    }
  }
}

::v-deep .el-form-item__content {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .captcha {
    width: 66%;
  }

  .el-button {
    margin-left: 5px;
    width: 32%;
    /* 文字超出隐藏 */
    text-overflow: ellipsis;
  }
}


.tip {
  text-align: center;
  margin: 15px 0;
  font-size: 20px;
  font-weight: 900;
  color: #333333;
  line-height: 23px;
  vertical-align: middle;

  img {
    margin-bottom: 10px;
    vertical-align: middle;
    width: 23px;
    height: 23px;
  }
}

::v-deep iframe {
  width: 100%;
  height: 240px;
}

::v-deep iframe img {
  max-width: 100%;
  height: auto;
}</style>