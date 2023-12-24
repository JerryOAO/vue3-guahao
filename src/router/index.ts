import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/hospital',
    component: () => import('@/pages/hospital/index.vue'),
    children: [
      {
        path: 'register',
        component: () => import('@/pages/hospital/register/index.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/pages/hospital/detail/index.vue'),
      },
      {
        path: 'notice',
        component: () => import('@/pages/hospital/notice/index.vue'),
      },
      {
        path: 'close',
        component: () => import('@/pages/hospital/close/index.vue'),
      },
      {
        path: 'search',
        component: () => import('@/pages/hospital/search/index.vue'),
      },
      {
        path:'register_step1',
        component: () => import('@/pages/hospital/register/register_step1.vue')
      }
    ]
  },
  {
    path:'/wxlogin',
    component:()=>import('@/pages/wxlogin/index.vue')
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
