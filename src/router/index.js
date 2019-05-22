import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/index')
    },
    {
      path: '/dy',
      name: 'dy',
      component: () => import('@/view/dy')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/view/music')
    },
    {
      path: '/dwz',
      name: 'dwz',
      component: () => import('@/view/dwz')
    }
  ]
})
