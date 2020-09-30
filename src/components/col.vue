<template>
  <div class="col" :class="['col_' + span]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    span: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
