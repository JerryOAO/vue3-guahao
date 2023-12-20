import { defineStore } from 'pinia';
import { reqValidateCode,reqUserLogin } from '@/api';
import type { LoginData, UserLoginResponseData,UserInfo } from '@/api/type';
import type { UserState } from '@/store/modules/interface/index';


const useUserStore = defineStore('User',{
  state(): UserState {
      return {
        visiable: false, //控制登录组件的显示
        captcha:'', //验证码
        userInfo: ({} as UserInfo )
      }
  },
  actions: {
    //获取验证码的方法
    async getCode(phone: string){
      let result:any = await reqValidateCode(phone)
      if(result.code === 200 && result.data !== null){
        this.captcha = result.data
        return 'ok'
      }else{
        return Promise.reject(new Error('获取验证码失败，请稍后再试！'))
      }
    },
    //用户登录的方法
    async userLogin(loginData: LoginData){
      let result:UserLoginResponseData = await reqUserLogin(loginData)
      if(result.code == 200 && result.data !== null){
        this.userInfo = result.data
        return 'ok'
      }else{
        return Promise.reject(new Error(result.message))
      }
    }
  },
  getters: {

  }
})

export default useUserStore