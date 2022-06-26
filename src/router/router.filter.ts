import { useMainStore } from '@/store'
import { Router } from 'vue-router'
// import { useMainStore } from '@/store/index'

const { log } = console
const initRouterFilter = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // const mainStore = useMainStore()
    log('前置守卫被调用')
    next()
  })

  router.onError(err => {
    log(err)
  })

  router.beforeResolve((to, from, next) => {
    log('全局解析守卫被调用')
    next()
  })

  router.afterEach(() => {
    log('全局后置钩子')
  })
}
export default initRouterFilter
