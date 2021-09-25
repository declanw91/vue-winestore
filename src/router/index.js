import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Red from '../views/Red.vue'
import White from '../views/White.vue'
import Rose from '../views/Rose.vue'
import Wine from '../views/Wine.vue'
import FullRange from '../views/FullRange'

Vue.use(VueRouter)

const routes = [
  {
    path: '/VueWineStore',
    name: 'home',
    component: Home
  },
  {
    path: '/VueWineStore/red',
    name: 'red',
    component: Red
  },
  {
    path: '/VueWineStore/white',
    name: 'white',
    component: White
  },
  {
    path: '/VueWineStore/rose',
    name: 'rose',
    component: Rose
  },
  {
    path: '/VueWineStore/wines/:region',
    name: 'wine',
    component: Wine
  },
  {
    path: '/VueWineStore/fullrange',
    name: 'fullRange',
    component: FullRange
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
