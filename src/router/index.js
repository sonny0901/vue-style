import { createRouter, createWebHistory } from 'vue-router'
import { gnbMenus } from '@/mocks/menus'
import HomeView from '@/views/HomeView.vue'

const TabView = () => import('@/views/TabView.vue')

// 홈을 제외한 GNB 탭은 menus.js 목록으로 라우트 생성 (화면 전환 확인용)
const tabRoutes = gnbMenus
  .filter((menu) => menu.to !== '/')
  .map((menu) => ({
    path: menu.to,
    name: menu.to.slice(1),
    component: TabView,
    props: { title: menu.label },
  }))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { headerFixed: true },
    },
    ...tabRoutes,
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
