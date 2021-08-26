import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import promotion from '../views/promotion/index.vue'
import searchResults from '../views/searchResults/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'promotion/:isPC',
    props: true,
    component: promotion
  },
  {
    path: '/searchResults/:userId/:type',
    name: 'searchResults',
    props: true,
    component: searchResults
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
