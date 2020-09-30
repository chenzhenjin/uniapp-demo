<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-30 15:26:00
 * @LastEditTime: 2020-09-30 15:31:40
 * @Descripttion: 模块描述
-->
<script>
export default {
  onHide() {
    // #ifndef H5
    this.$Router.tabFrom = this.$Router.$Route.path
    // #endif
  },
  onTabItemTap() {
    // #ifndef H5
    this.$Router.switchTab(
      { path: this.$Router.$Route.path },
      { path: this.$Router.tabFrom }
    )
    // #endif
  }
}
</script>

<style lang="scss" scoped>
</style>
