<template>
  <div class="ellipsis">
    <span :class="{ 'ellipsis-span': showEllipsis }">{{ showText }}</span>
  </div>
</template>

<script>
export default {
  name: 'yEllipsis',
  props: {
    limit: {
      type: Number,
      default: -1
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    showText() {
      return this.text.length > this.limit
        ? this.text.slice(0, this.limit)
        : this.text
    },
    showEllipsis() {
      return this.showText.length < this.text.length
    }
  },
  watch: {
    text: function (newVal, oldVal) {
      console.log('text newVal, oldVal', newVal, oldVal)
    }
  },
  beforeDestroy() {
    console.log('ellipsis beforeDestroy')
  }
}
</script>

<style lang="scss" scoped>
.ellipsis{
  width: 90%;
}
.ellipsis-span {
  position: relative;
  &::after {
    position: absolute;
    content: '...';
  }
}
</style>
