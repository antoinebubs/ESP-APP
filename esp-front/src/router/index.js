import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewsView from '../views/NewsView.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import SignIn from '@/views/SignIn.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: MainPage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
