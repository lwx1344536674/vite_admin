
import {createRouter, createWebHashHistory} from "vue-router";
import Layout from '@/layout/index.vue'



export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/features/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/features/401.vue'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/features/redirect.vue')
      }
    ]
  }
]

export default createRouter({
  // mode: 'hash',
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRouterMap
})
