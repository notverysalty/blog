import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'articleList',
        name: 'articleList',
        // route level code-splitting 
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleList.vue')
      }, {
        path: 'addArticle',
        name: 'addArticle',
        component: () => import('../views/article/AddArticle.vue')
      }, {
        path: 'tagList',
        name: 'tagList',
        component: () => import('../views/tag/TagList.vue')
      }, {
        path: 'typeList',
        name: 'typeList',
        component: () => import('../views/type/TypeList.vue')
        }
    ]
  }, {
    path: '/admin/login',
    name: 'login',
    component: Login
  }
]

export default routes