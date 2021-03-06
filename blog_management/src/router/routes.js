import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/welcome/index.vue'),
      },
      {
        path: 'articleList',
        name: 'articleList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/article/ArticleList.vue'
          ),
      },
      {
        path: 'addArticle',
        name: 'addArticle',
        component: () => import('../views/article/AddArticle.vue'),
      },
      {
        path: 'editArticle/:id',
        name: 'editArticle',
        component: () => import('../views/article/EditArticle.vue'),
      },
      {
        path: 'preview/:id',
        name: 'preview',
        component: () => import('../views/article/Preview.vue'),
      },
      {
        path: 'tagList',
        name: 'tagList',
        component: () => import('../views/tag/TagList.vue'),
      },
      {
        path: 'typeList',
        name: 'typeList',
        component: () => import('../views/type/TypeList.vue'),
      },
      {
        path: 'linkList',
        name: 'linkList',
        component: () => import('../views/link/index.vue'),
      },
      {
        path: 'commentList',
        name: 'commentList',
        component: () => import('../views/comment/index.vue'),
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    redirect: {name: 'articleList'}
  }
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes
