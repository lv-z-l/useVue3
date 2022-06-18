import { Apps } from '@vicons/ionicons5'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import initRouterFilter from './router.filter'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Default', component: () => import('@/components/HelloWorld.vue') },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/common/notfound/404.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

initRouterFilter(router)

export default router
