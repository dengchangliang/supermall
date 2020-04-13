import Vue from "vue"
 import VueRouter from 'vue-router'
// const Home =()=>import ('@/view/home/home')
// 1.安装插件


 Vue.use(VueRouter)
// 2.创建路由
const router= new VueRouter({
  // mode:'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component:()=>import ('@/views/home/home'),
    },
    {
      path: '/type',
      name: 'type',
      component:()=>import ('@/views/type/type'),
    },
    {
      path: '/buycar',
      name: 'buycar',
      component:()=>import ('@/views/buycar/buycar'),
    },
    {
      path: '/my',
      name: 'my',
      component:()=>import ('@/views/my/my'),
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component:()=>import ('@/views/detail/detail'),
    },
  ]
})
//3.导出

export default router
