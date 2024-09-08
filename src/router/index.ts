import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/views/NotFound.vue'
import StartQuiz from '@/views/StartQuiz.vue'
import CategoriesQuiz from '@/views/CategoriesQuiz.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: StartQuiz
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesQuiz
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
