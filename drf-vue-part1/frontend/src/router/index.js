import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '../views/Posts.vue'

const routes = [
  {
    path: '/',
    name: 'posts',
    component: Posts
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
