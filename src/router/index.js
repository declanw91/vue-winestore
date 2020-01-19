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
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/red',
    name: 'red',
    component: Red
  },
  {
    path: '/white',
    name: 'white',
    component: White
  },
  {
    path: '/rose',
    name: 'rose',
    component: Rose
  },
  {
    path: '/wines/:id',
    name: 'wine',
    component: Wine
  },
  {
    path: '/fullrange',
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
