/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-23 18:20:28
 * @LastEditTime: 2020-09-29 14:07:34
 * @Descripttion: 封装get post请求
 */
import _ajax from "./ajax_interceptors";
export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      _ajax({
        method: "GET",
        url,
        data: params,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      }).then(task=>{
        // console.log("get task", task);
      })
    });
  },
  post(
    url,
    params,
    header = { "Content-Type": "application/json;charset=UTF-8" }
  ) {
    return new Promise((resolve, reject) => {
      _ajax({
        method: "POST",
        url,
        data: params,
        header,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      }).then(task=>{
        // console.log("post task", task);
      })
    });
  },
  // get请求data跟post保持一致，跟axios有区别，以下方式产生不了中断请求方法
  // get(url, params = {}) {
  //   return _ajax.get(url, params);
  // },
  // post(
  //   url,
  //   params,
  //   header = { "Content-Type": "application/json;charset=UTF-8" }
  // ) {
  //   return _ajax.post(url, params, { header });
  // }
};
