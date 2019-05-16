import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/index')
    },
    {
      path: '/dy',
      name: 'dy',
      component: () => import('@/pages/dy')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/pages/music')
    }
  ]
})
