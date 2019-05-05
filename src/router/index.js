import Vue from 'vue'
import Router from 'vue-router'
import maoyan from '@/pages/maoyan'
import music from '@/pages/music'
import index from '@/components/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/dy',
      name: 'dy',
      component: maoyan
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
