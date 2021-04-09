/*
* 包含应用中所有接口请求函数的模块
* */

import {request} from './request';

// 登录
export const reqLogin = (data) => {
  return request('/login',data,'post')
};

// 添加用户
export const reqAddUser = (user) => {
  return request('/manage/user/add',{user},'post')
};