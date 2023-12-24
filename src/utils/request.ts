import axios from 'axios'
import useUserStore from '@/store/modules/user'
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  //获取用户仓库找token
  let userStore = useUserStore()
  if(userStore.userInfo.token){
    config.headers.token = userStore.userInfo.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default request
