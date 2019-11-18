import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from './pages/login.vue'
import index from './pages/index.vue'

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index
    }
  ]
})

export default router