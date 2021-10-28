import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Creatives from '../views/Creatives.vue'
import Read from '../views/Read.vue'
import Voices from '../views/Voices.vue'
import Article from '../views/Article.vue'
import Voice from '../views/Voice.vue'
import Watch from '../views/Watch.vue'
import Media from '../views/Media.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creative',
    name: 'Creatives',
    component: Creatives
  },
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
   {
    path: '/voices',
    name: 'Voices',
    component: Voices
  },
  {
    path: '/voice/:id',
    name: 'voice',
    component: Voice
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/media/:id',
    name: 'media',
    component: Media
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/pause',
    name: 'Pause',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pause.vue')
  },
  {
    path: '/add',
    name: 'Add Submission',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  },
  {
    path: '/addcreative',
    name: 'Add Creative',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddCreative.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/article' || to.path === '/article/0') && (!to.params.id || to.params.id == "0")) {
    next({name: 'Read'})
  } else {
    next()
  }
})

export default router
