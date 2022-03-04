import Home from '../views/home.vue'

exprot [
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