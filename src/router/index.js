import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos',
      name: 'ProdutoIndex',
      component: () => import('../views/produtos/ProdutoIndex.vue')
    },
    {
      path: '/produtos/create',
      name: 'ProdutoCreate',
      component: () => import('../views/produtos/ProdutoCreate.vue')
    },
    {
      path: '/produtos/:id/edit',
      name: 'ProdutoEdit',
      component: () => import('../views/produtos/ProdutoEdit.vue'),
      props: true,
    }
  ]
})

export default router
