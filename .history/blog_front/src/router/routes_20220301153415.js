import Home from '../views/home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/archive',
    name: 'archive',
    component: import ('../views/archive.vue')
  }, {
    path: '/tags',
    name: 'tags',
    component: import ('../views/tags.vue')
  }
]