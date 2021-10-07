<template>
  <div class="container">
    <!-- set tooltip text manually -->
    <button
      v-if="text"
      v-tooltip="{
        content: text,
        placement: position,
      }"
      :position="position"
      class="tm-link"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    /**
     * position
     *
     * `auto` | `auto-start` | `auto-end` | `top` | `top-start` | `top-end` | `right` | `right-start` | `right-end`
     * `bottom` | `bottom-start` | `bottom-end` | `left` | `left-start` | `left-end`
     */
    position: {
      type: String,
      default: 'auto',
    },
  },
  computed: {},
}
</script>

<style lang="stylus" scoped>
.container
  display inline-block
  position relative
</style>
