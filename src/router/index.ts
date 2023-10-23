import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/guahao',
    component: () => import('@/pages/guahao/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  //控制路由跳转后滚动条的位置
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
