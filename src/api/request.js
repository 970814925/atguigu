//利用axios对axios进行二次封装
//故先引入axios
import axios from 'axios';
import nprogress  from 'nprogress';
import "nprogress/nprogress.css";
//1.利用axios对象的方法create，创建一个axios实例
//2.request就是axios，但需要稍微进行配置。
const requests = axios.create({
    //配置对象
    //baseURL基础路径，发请求时，路径当中会出现api
    baseURL: '/api',
    //timeout代表请求超时的时间
    timeout: 5000,
});
// 请求拦截器：可以在发请求之前，可处理一些业务。
requests.interceptors.request.use(config => {
    //config:配置对象，对象中有一个属性很重要(即：headers请求头)
    nprogress.start();
    return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
    //响应成功的回调函数：服务器响应数据回来之后，响应拦截器可检测到，可做一些事情
    nprogress.done()
    return res.data;
}, (error) => {
    //响应失败的回调函数
    console.log("响应失败"+error)
    return Promise.reject(new Error('fail'))
});
// 对外暴露
export default requests;




// import axios from "axios";
// //引入进度条
// import nprogress from 'nprogress';
// //引入进度条样式
// import "nprogress/nprogress.css";
// //1、对axios二次封装
// const requests = axios.create({
//     //基础路径，requests发出的请求在端口号后面会跟改baseURl
//     baseURL:'/api',
//     timeout: 5000,
// })
// //2、配置请求拦截器
// requests.interceptors.request.use(config => {
//     //config内主要是对请求头Header配置
//     //比如添加token

//     //开启进度条
//     nprogress.start();
//     return config;
// })
// //3、配置相应拦截器
// requests.interceptors.response.use((res) => {
//     //成功的回调函数

//     //响应成功，关闭进度条
//     nprogress.done()
//     return  res.data;
// },(error) => {
//     //失败的回调函数
//     console.log("响应失败"+error)
//     return Promise.reject(new Error('fail'))
// })
// //4、对外暴露
// export default requests;
