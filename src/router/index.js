import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Bcp from '../views/Bcp.vue'

const routes = [
  {
    path: '/',
    name: 'Bcp',
    component: Bcp
  },
  {
    path: '/wuqi',
    name: 'Wuqi',
    component: () => import('../views/Wuqi.vue')
  },
  {
    path: '/hujia',
    name: 'Hujia',
    component: () => import('../views/Hujia.vue')
  },
  {
    path: '/xiangqing',
    name: 'Xiangqing',
    component: () => import('../views/Xiangqing.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
