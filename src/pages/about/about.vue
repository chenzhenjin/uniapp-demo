<template>
  <div class="about">
    <button
      class="button-primary"
      @click="requestList"
      :loading="listLoading"
      :disabled="listLoading"
    >
      发出请求list
    </button>
    <button class="button-primary" @click="requestDetail">
      发出请求datail
    </button>
    <button class="button-primary" @click="requestadd">发出add提交</button>
    <y-ellipsis :text="text" :limit="20"></y-ellipsis>
    <!-- u-button性能好差 不适合快速反应的场景 -->
    <button
      class="button-primary"
      @click="text = text.slice(0, text.length - 5)"
    >
      改变text，测试watch
    </button>
    <input type="digit" v-model="number" style="border: 1px solid blue" />
  </div>
</template>

<script>
import yEllipsis from '@/components/ellipsis'
import tabInterceptors from '@/mixins/tabInterceptors'
export default {
  name: '',
  components: { yEllipsis },
  mixins: [ tabInterceptors ],
  props: {},
  data() {
    return {
      text: 'about的省略号组件引入，而且是原有web组件',
      listLoading: false,
      number: ''
    }
  },
  onShow() {
    console.log('about onShow')
    this.text = 'about的省略号组件引入，而且是原有web组件'
  },
  onHide(){
    console.log('about onHide')
  },
  onTabItemTap() {
    console.log('onTabItemTap about')
  },
  methods: {
    requestList() {
      this.listLoading = true
      this.$ajax.get('/uniapp/list', { name: 'chen' }).then((res) => {
        setTimeout(() => {
          this.listLoading = false
        }, 2000)
        console.log('requestList', res)
      })
    },
    requestDetail() {
      this.$ajax.get('/uniapp/detail').then((res) => {
        console.log('requestdetail', res)
      })
    },
    requestadd() {
      this.$ajax
        .post('/uniapp/add', {
          name: 'chenzhenjin',
          child: [{ name: 'xiaoming' }]
        })
        .then((res) => {
          console.log('requestadd', res)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
