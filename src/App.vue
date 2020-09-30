<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-23 11:15:21
 * @LastEditTime: 2020-09-30 16:41:54
 * @Descripttion: 模块描述
-->
<script>
export default {
  onLaunch: function () {
    uni.setTabBarBadge({ index: 1, text: '3' })
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
</style>
