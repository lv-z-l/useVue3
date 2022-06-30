import { useMainStore } from '@/store'
import { Router } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
// import { useMainStore } from '@/store/index'

nprogress.configure({ showSpinner: true }) // NProgress 配置

const { log } = console
const initRouterFilter = (router: Router) => {
  router.beforeEach((to, from, next) => {
    nprogress.start()
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
    nprogress.done()
    log('全局后置钩子')
  })
}
export default initRouterFilter
