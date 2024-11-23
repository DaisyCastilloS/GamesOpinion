import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OpinionView from '@/views/OpinionView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/opinions/:name', component: OpinionView },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
