//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

//1.使用插件
Vue.use(VueRouter)

//3.按需引入所需路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'



//2.配置路由
export default new VueRouter({
  //配置路由
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{show:true}//show是否展示Footer,$router.meta
    },
    {
      path:"/search/:keyword?",
      component:Search,
      meta:{show:true},//show是否展示Footer,$router.meta
      name:'search'
    },
    {
      path:'/login',
      component:Login,
      meta:{show:false}//show是否展示Footer,$router.meta
    },
    {
      path:'/register',
      component:Register,
      meta:{show:false}//show是否展示Footer,$router.meta
    },
    //重定向
    {
      path:'/',
      redirect: '/home',
    }
  ]
})

//4.在main.js中引入这个路由(import router from './router'),并注册
//5.在App.vue中定义路由组件的出口(<router-view></router-view>)