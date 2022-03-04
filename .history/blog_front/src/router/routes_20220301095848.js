import Home from '../views/home.vue'

exprot default [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/archive',
    name: 'archive',
    component: import ('../views/archive.vue')
  }
]