import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroSection from '../pages/HeroSection.vue'
import WorldMap from '../pages/WorldMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: HeroSection
  },
  {
    path: '/map',
    name: 'WorldMap',
    component: WorldMap
  },
  {
    path: '/body',
    name: 'Body',
    component: () => import(/* webpackChunkName: "body" */ '../pages/Body.vue')
  },
  {
    path: '/white',
    name: 'WhiteBody',
    component: () => import(/* webpackChunkName: "white" */ '../pages/WhiteBody.vue')
  },
  {
    path: '/black',
    name: 'BlackBody',
    component: () => import(/* webpackChunkName: "black" */ '../pages/BlackBody.vue')
  },
  {
    path: '/apart',
    name: 'Apart',
    component: () => import(/* webpackChunkName: "apart" */ '../pages/Apart.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import(/* webpackChunkName: "graph" */ '../pages/Graph.vue')
  },
  {
    path: '/last',
    name: 'LastPage',
    component: () => import(/* webpackChunkName: "last" */ '../pages/LastPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
