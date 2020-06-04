import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'
// import state from '../store/state';

Vue.use(VueRouter)


const routes = [
  // 注意：二级路由不需要加'/'
  {
    path: '/',
    redirect: '/dashboard',
    // 是否数据缓存
    meta: {
      keepAlive: true
    }
  },
  {
    // 跟页面
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // 解决路由跳转页面没有置顶
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
