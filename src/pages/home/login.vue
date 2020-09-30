<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-23 16:31:07
 * @LastEditTime: 2020-09-30 16:00:23
 * @Descripttion: 模块描述
-->
<template>
  <div>
    <div class="row login-row">
      <y-col class="zhifubao" :class="['col_'+span]" :span="span">
        <div>101</div>
        <div>102</div>
      </y-col>
      <y-col :class="['col_'+span]" :span="span">132</y-col>
      <y-col :class="['col_'+span]" :span="span">132</y-col>
    </div>
    <u-swiper style="width: 100%" :list="list" :effect3d="true"></u-swiper>
  </div>
</template>

<script>
import yCol from '@/components/col'
export default {
  name: '',
	components: { yCol },
  data() {
    return {
      span: 3,
      // 绝对路径
      list: [
        '/static/swiper/rqb_anli_1.png',
        '/static/swiper/rqb_anli_2.png',
        '/static/swiper/rqb_anli_3.png'
      ]
    }
  },
  onLoad() {
    console.log('login onload')
  },
  beforeDestroy() {
    console.log('login destroyed')
  }
}
</script>

<style lang="scss" scoped>
.login-row{
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
}
</style>
