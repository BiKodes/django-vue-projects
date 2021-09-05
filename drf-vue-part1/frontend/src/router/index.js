import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
