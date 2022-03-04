import Home from '../views/home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/archive',
    name: 'archive',
    component: () => import ('../views/archive.vue')
  }, {
    path: '/tags',
    name: 'tags',
    component: () => import ('../views/tags.vue')
  }, {
    path: '/links',
    name: 'links',
    component: () => import ('../views/links.vue')
  }, {
    path: '/article/:id',
    name: 'article',
    comoponent: () => import ('../views/article.vue')
  }
]