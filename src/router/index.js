/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-23 15:08:46
 * @LastEditTime: 2020-09-30 16:17:41
 * @Descripttion: 模块描述
 */
import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
    routes: [...modules]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach to from', to, from)
  next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
//全局切换tab守卫
router.switchTab = (to, from)=>{
  let res = true
  console.log('beforeSwitchTab to from', to, from)
  return res
}
export default router;