import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav/TypeNav.vue'
Vue.component(TypeNav.name,TypeNav) //注册为全局组件 第一个名字 第二个组件 
import router from '@/router'
Vue.config.productionTip = false
// import{reqCategoryList} from '@/api'
import store  from '@/store' 
// reqCategoryList();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
