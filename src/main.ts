import { createApp } from 'vue'
import '@/assets/reset.scss'
import App from './App.vue'

//引入全局组件--顶部、底部都是全局组件
import GuahaoTop  from  '@/components/guahao_top/index.vue'
import GuahaoBottom  from  '@/components/guahao_bottom/index.vue'
//引入路由
import router from '@/router/index.ts'

const app = createApp(App)
app.use(router)
app.component('GuahaoTop', GuahaoTop)
app.component('GuahaoBottom', GuahaoBottom)
app.mount('#app')
