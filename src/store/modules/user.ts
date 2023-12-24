import { defineStore } from 'pinia';
import { reqValidateCode, reqUserLogin } from '@/api';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/user';
import type { LoginData, UserLoginResponseData } from '@/api/type';
import type { UserState } from '@/store/modules/interface/index';


const useUserStore = defineStore('User', {
  state(): UserState {
    return {
      visiable: false, //控制登录组件的显示
      captcha: '', //验证码
      userInfo: JSON.parse(GET_TOKEN() || '{}') //用户信息
    }
  },
  actions: {
    //获取验证码的方法
    async getCode(phone: string) {
      let result: any = await reqValidateCode(phone)
      if (result.code === 200 && result.data !== null) {
        this.captcha = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error('获取验证码失败，请稍后再试！'))
      }
    },
    //用户登录的方法
    async userLogin(loginData: LoginData) {
      let result: UserLoginResponseData = await reqUserLogin(loginData)
      if (result.code == 200 && result.data !== null) {
        this.userInfo = result.data
        //本地持久化存储 
        SET_TOKEN(JSON.stringify(this.userInfo))
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //用户退出登录的方法
    logout() {
      this.userInfo = { name: '', token: '' }
      REMOVE_TOKEN()
    },
    //查询微信扫码的接口
    queryState() {
      //   //关闭登录框
      this.userInfo = JSON.parse(GET_TOKEN() as string)
      this.visiable = false
    }
  },
  getters: {

  }
})

export default useUserStore