import { createRouter, createWebHistory } from 'vue-router'
import AnimalData from '@/views/AnimalData.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'animal data',
      component: AnimalData,
    },
  ],
})

export default router
