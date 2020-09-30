<template>
  <div
    class="sticky"
    :class="{ fixed: top > 30 }"
    :style="{ top: fixedStyle.top, 'z-index': fixedStyle['z-index'] }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sticky',
  components: {},
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    stickyStyle: {
      type: Object,
      default: () => {
        return {
          'z-index': 999
        }
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    top() {
      return this.scrollTop
    },
    fixedStyle() {
      return this.scrollTop > 30 ? this.stickyStyle : { top: 0, 'z-index': "auto" }
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
.fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
</style>
