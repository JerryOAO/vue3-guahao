import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta:{
      title:'首页'
    }
  },
  {
    path: '/hospital',
    component: () => import('@/pages/hospital/index.vue'),
    children: [
      {
        path: 'register',
        component: () => import('@/pages/hospital/register/index.vue'),
        meta:{
          title:'预约挂号'
        }
      },
      {
        path: 'detail',
        component: () => import('@/pages/hospital/detail/index.vue'),
        meta:{
          title:'医院详情'
        }
      },
      {
        path: 'notice',
        component: () => import('@/pages/hospital/notice/index.vue'),
        meta:{
          title:'预约通知'
        }
      },
      {
        path: 'close',
        component: () => import('@/pages/hospital/close/index.vue'),
        meta:{
          title:'停诊信息'
        }
      },
      {
        path: 'search',
        component: () => import('@/pages/hospital/search/index.vue'),
        meta:{
          title:'查询'
        }
      },
      {
        path:'register_step1',
        component: () => import('@/pages/hospital/register/register_step1.vue')
      },
      {
        path:'register_step2',
        component: () => import('@/pages/hospital/register/register_step2.vue')
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
  },
  {
    path:'/user',
    component:()=>import('@/pages/user/index.vue'),
    children:[
      {
        path:'certification',
        component:()=>import('@/pages/user/certification/index.vue'),
        meta:{
          title:'实名认证'
        }
      },
      {
        path:'order',
        component:()=>import('@/pages/user/order/index.vue'),
        meta:{
          title:'挂号订单'
        }
      },
      {
        path:'patient',
        component:()=>import('@/pages/user/patient/index.vue')
      },
      {
        path:'profile',
        component:()=>import('@/pages/user/profile/index.vue')
      },
      {
        path:'feedback',
        component:()=>import('@/pages/user/feedback/index.vue')
      }
    ]
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
