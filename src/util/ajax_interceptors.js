/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-23 17:52:59
 * @LastEditTime: 2020-09-25 14:20:37
 * @Descripttion: ajax拦截器
 */
import ajax from 'uni-ajax'
const _ajax = ajax.create({
  baseURL: 'http://localhost:3000'
})
_ajax.interceptors.request.use(
  request => {
    // Do something before request is sent
    if(request.url.includes('detail')){
      //相当之前的CancelToken了
      return false
    }
    console.log('请求拦截', request)
    return request;
  },
  error => {
    // Do something with request error
    return error;
  }
);

_ajax.interceptors.response.use(
  response => {
    // Do something with response data
    console.log('响应拦截')
    return response;
  },
  error => {
    // Do something with response error
    return error;
  }
);

export default _ajax;