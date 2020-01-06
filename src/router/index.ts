import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/UE'
  },
  {
    path: '/UE',
    name: 'UE',
    component: () => import('@/views/UE.vue')
  },
  {
    path:'/VueFullcalendar',
    name:'VueFullcalendar',
    component: ()=>import('@/views/VueFullcalendar.vue')
  },
  // {
  //   path:'/Fullcalendar',
  //   name:'Fullcalendar',
  //   component: ()=>import('@/views/Fullcalendar.vue')
  // },
  {
    path:'/Step',
    name:'Step',
    component: ()=>import('@/views/Step.vue')
  },
  {
    path:'/IView',
    name:'IView',
    component: ()=>import('@/views/IView.vue')
  },
  {
    path:'/ElementUI',
    name:'ElementUI',
    component: ()=>import('@/views/ElementUI.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
