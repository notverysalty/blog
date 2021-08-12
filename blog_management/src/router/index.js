import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import util from '../util/util'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局路由守卫，不在登录状态路由跳转到登录页
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    const token = util.getLocal('token')
    if (token) {
      next()
    } else {
      util.localClear()
      next({
        name: 'login'
      })
    }
  }
})

export default router
