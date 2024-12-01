import Vue from 'vue'
import App from './App.vue'

//2.三级联动组件,注册全局组件
import TypeNav from '@/pages/Home/TypeNav'

//21.注册(第一个参数:全局组件的名字,第二个参数:哪一个组件)
Vue.component(TypeNav.name,TypeNav)

//11.引入router文件的路由
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //12.注册路由,kv一致
  router
}).$mount('#app')
