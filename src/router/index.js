import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect: 'home',  // 重定向:重新指向其它path,会改变网址
  },
  {
    path: '/index',
    name: 'index',
    component: () => import( '../views/Index.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component: () => import( '../views/HomeView.vue'),
      },
      {
        path:'/cate',
        name:'cate',
        component: () => import( '../views/Cate.vue'),
      },
      {
        path:'/cart',
        name:'catr',
        component: () => import( '../views/Cart.vue'),
      },
      {
        path:'/my',
        name:'my',
        component: () => import( '../views/my.vue'),
      },
      {
        path:'/detail',
        name:'detail',
        component: () => import( '../views/Detail.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
