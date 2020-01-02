import axios from 'axios'

const request = axios.create({
    // baseURL: 'https://some-domain.com/api',
    timeout: 5000
})

//请求拦截 config请求配置
//只有return了config才可以继续请求.
// request.interceptors.request.use(config => {
//     //如果输入框的内容不为空,就继续请求,如果为空终止请求,并且设置红边框提醒用户.
//         if(localStorage.getItem('token')){
//         config.headers.Authorization = 'token ' + localStorage.getItem('token');
//         return config
//     }
// },function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   })

// //响应拦截
// //只有return了response才可以继续接收数据.
// request.interceptors.response.use(response => {
//     return Promise.resolve(response)
// }, e => Promise.reject(e))

export default request
