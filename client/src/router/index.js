import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isAuthenticated() {
  if (localStorage.username) {
    return true
  }
  else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  console.log(to.name, isAuthenticated())
  if (to.name !== 'Home' && !isAuthenticated()) next({ name: 'Home' })
  else if (to.name === 'Home' && isAuthenticated()) next({ name: 'Dashboard' })
  else next()
})

export default router
