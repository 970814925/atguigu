//当前模块的功能：API接口统一管理
//用到了二次封装的requests，需要将其引入
import requests from "./request";
//三级联动接口
//WORD接口文档中已经说明三级联动的接口为
// /api/product/getBaseCategoryList  methods为get   无参数
//发请求：axios发请求返回的结果是Promise对象

//二次封装时，已经写了/api，所以这里不用再写/api了
export const reqCategoryList = () => {
    
    return requests({ 
        url: '/product/getBaseCategoryList', 
        method: 'get' })
} 
//上面代码=>箭头函数的简写形式
/* export const reqCategoryList = () => requests({ 
        url: '/product/getBaseCategoryList', method: 'get' 
}) */
// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')