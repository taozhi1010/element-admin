import axios from 'axios'
// import store from '@/store'
// import {
//     getToken
// } from '@/utils/auth'
import router from '@/router';
const service = axios.create({
    baseURL: "http://localhost:7001",
    timeout: 5000, //超时毫秒

});

// 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (window.localStorage.getItem('token')) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['authorization'] = 'Bearer' + window.localStorage.getItem('token')
    }
    return config;

}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    console.log("response===>", response)
    if (response.data.code == 999) {
        router.push({
            name: 'Login'
        })
    }
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service