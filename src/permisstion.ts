import pinia from '@/store'
import router from './router'
import useUserStore from './store/modules/user'

let userStore = useUserStore(pinia)

router.beforeEach((to, from, next) => {
  document.title=`尚医通-${to.meta.title}`
  next()
})