/*
* 能发送异步ajax请求的函数模块
* 封装axios
* */
import axios from 'axios';

/* 视频老师讲解的方法 */
 // export default function request(url,data={},type='get') {
 //   if (type === 'get'){
 //     return axios.get(url,{
 //       params:data
 //     })
 //   }else {
 //     return axios.post(url,data)
 //   }
 // }

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_URL, // api的base_url
  // baseURL:'http://192.168.8.250:18080/siweidgbaseframe',
  timeout: 60000,                 // 请求超时时间
  validateStatus: function (status) {
    // return status >= 200 && status < 300; // default
    return true
  }
});
// request拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

service.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
);

export function request(url,data={},type='get') {
  if (type === 'get'){
    return service.get(url,{
      params:data
    })
  }else {
    return service.post(url,data)
  }
}
