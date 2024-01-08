import { createApp } from 'vue'
import '@/assets/reset.scss'
import App from './App.vue'

//引入全局组件--顶部、底部都是全局组件
import GuahaoTop from '@/components/guahao_top/index.vue'
import GuahaoBottom from '@/components/guahao_bottom/index.vue'
import Login from '@/components/login/index.vue'
import Visitor from '@/components/visitor/index.vue'
//引入路由
import router from '@/router/index.ts'
//引入element-plus
import ElementPlus from 'element-plus'
//element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//解决样式失效问题
import 'element-plus/theme-chalk/index.css'
// 引入字体样式
import "@/assets/font/font.css"
import pinia from '@/store'
import './permisstion'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)
app.component('GuahaoTop', GuahaoTop)
app.component('GuahaoBottom', GuahaoBottom)
app.component('Login', Login)
app.component('Visitor', Visitor)
app.mount('#app')
