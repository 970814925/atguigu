import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home/Home'
import Search from '@/pages/Search/Search'
import Register from '@/pages/Register/Register'
import Login from '@/pages/Login/Login'
import Header from '@/components/Header/Header'
//若有成功和失败的回调，有则返回这俩值，无则自己手写() => {}
//先把VueRouter原型对象的push先保存一份
let originPush = VueRouter.prototype.push;
//先把VueRouter原型对象的replace先保存一份
let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数location：告诉原来的push方法，你往哪里跳转（传递哪些参数）
//第二个参数resolve：成功回调。
//第三个参数reject：失败回调。
//call|apply区别
//相同点：都可调用函数一次，都可篡改函数的上下文一次。
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组。
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
export default new VueRouter({
    routes:[
        {
            path:'/haha',
            component:Header,
        },
    {
        path:'/home',
        component:Home,
        meta:{showFooter : true}

    },
    {
        path: '/search/:keyword?',//在这里声明接收参数
        component:Search,
        meta:{showFooter : true},
        name:'sousuo'

    },
    {
        path:'/login',
        component:Login,
        meta:{showFooter : false},
     

    },
    {
        path:'/register',
        component:Register,
        meta:{showFooter : false}

    },
    //重定向
    {
        path:'*',
        redirect:'/home'
    }
]
})
