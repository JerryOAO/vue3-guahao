import { createApp } from 'vue'
import '@/assets/reset.scss'
import App from './App.vue'

//引入全局组件--顶部、底部都是全局组件
import GuahaoTop  from  '@/components/guahao_top/index.vue'
const app = createApp(App)
app.component('GuahaoTop', GuahaoTop)
app.mount('#app')
