import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Read from '../views/Read.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
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
    path: '/add',
    name: 'Add Submission',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
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
