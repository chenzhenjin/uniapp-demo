<template>
  <view class="content">
    <sticky
      style="width: 100%"
      :scroll-top="scrollTop"
      :sticky-style="stickyStyle"
    >
      <button
        class="button-primary jump-button"
        hover-class="none"
        @click="jump"
      >
        跳到about
      </button>
    </sticky>
    <router-link to="/pages/about/about" navType="pushTab" style="margin: 15px">
      <button type="default" hover-class="none" @click="pathJump">
        组件式路由跳转
      </button>
    </router-link>
    <button class="button-primary" hover-class="none" @click="jumpLogin">
      跳到login
    </button>
    <button
      class="button-primary"
      hover-class="button-primary_hover"
      @click="changShow"
    >
      显示
    </button>
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <div @click="showTab">
      <u-action-sheet
        :list="list"
        v-model="show"
        @click="changeActive"
        @close="close"
      ></u-action-sheet>
    </div>
    <div style="height: 200px" id="bottom">200px</div>
  </view>
</template>

<script>
import sticky from '@/components/sticky'
import tabInterceptors from '@/mixins/tabInterceptors'
export default {
  components: { sticky },
  mixins: [tabInterceptors],
  data() {
    return {
      title: 'Hello',
      baseList: [
        {
          text: '点赞'
        },
        {
          text: '分享'
        },
        {
          text: '评论'
        }
      ],
      list: [
        {
          text: '点赞'
        },
        {
          text: '分享'
        },
        {
          text: '评论'
        }
      ],
      show: true,
      active: {
        color: 'blue',
        fontSize: '28'
      },
      scrollTop: 0,
      stickyStyle: {
        // #ifndef H5
        top: '20px',
        // #endif
        // #ifdef H5
        top: '64px',
        // #endif
        'z-index': '1000'
      }
    }
  },
  created() {
    this.hideTab()
    console.log('home created')
  },
  onLoad() {
    console.log('home onload')
  },
  beforeDestroy() {
    console.log('home destroyed')
  },
  onHide() {
    console.log('home onHide')
    // #ifdef MP-ALIPAY
    let scroll = { scrollTop: 0 }
    // #endif
    // #ifndef MP-ALIPAY
    let scroll = { scrollTop: 0, duration: 0 }
    // #endif
    uni.pageScrollTo(scroll)
  },
  onShow() {
    console.log('home onShow', this.$Router)
  },
  //最低版本为2.5.2
  onTabItemTap() {
    this.scrollTop = 0
    // #ifdef MP-ALIPAY
    let scroll = { scrollTop: 0 }
    // #endif
    // #ifndef MP-ALIPAY
    let scroll = { scrollTop: 0, duration: 0 }
    // #endif
    uni.pageScrollTo(scroll)
    console.log('onTabItemTap home')
  },
  onPageScroll(val) {
    this.scrollTop = val.scrollTop
    console.log('onPageScroll', val)
  },
  onPullDownRefresh() {
    console.log('home onPullDownRefresh')
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  onReachBottom() {
    console.log('home onReachBottom')
  },
  onReady() {
    const query = uni.createSelectorQuery()
    console.log('onReady query', query.select('#bottom'))
    query
      .select('#bottom')
      .boundingClientRect((res) => {
        console.log('onReady boundingClientRect', res)
      })
      .exec()
    query
      .select('#bottom')
      .fields({ dataset: true, size: true, rect: true }, (res) => {
        console.log('onReady fields', res)
      })
      .exec()
  },
  onUnload() {
    console.log('home onunload')
  },
  methods: {
    jump(e) {
      console.log('jump', e)
      // #ifdef MP-WEIXIN
      this.$Router.switchTab(
        { path: '/pages/about/about' },
        { path: '/pages/home/home' }
      )
      uni.switchTab({ url: '/pages/about/about' })
      return
      // #endif
      // #ifdef MP-ALIPAY
      // switchTab会触发onTabItemTap，onTabItemTap挂载了拦截函数
      uni.switchTab({ url: '/pages/about/about' })
      return
      // #endif
      this.$Router.push('/pages/about/about')
    },
    pathJump() {
      console.log('pathJump')
    },
    jumpLogin() {
      this.$Router.push('/pages/home/login')
    },
    changShow() {
      this.show = true
      this.hideTab()
    },
    changeActive(index) {
      this.showTab()
      let list = JSON.parse(JSON.stringify({ list: this.baseList })).list
      list[index] = { ...list[index], ...this.active }
      this.list = list
      // console.log('changeActive', index)
    },
    showTab() {
      uni.showTabBar()
    },
    hideTab() {
      uni.hideTabBar()
    },
    close() {
      this.showTab()
    }
  }
}
</script>

<style lang="scss">
.jump-button {
  width: 90%;
  margin: 0 auto;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
