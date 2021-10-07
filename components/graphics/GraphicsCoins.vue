<template>
  <div class="canvas">
    <graphics-coin-atom class="coin _1" />
    <graphics-coin-atom class="coin _2" />
    <graphics-coin-atom class="coin _3" />
    <graphics-coin-atom class="coin _4" />
    <graphics-coin-atom class="coin _5" />
    <graphics-coin-atom class="coin _6" />
    <div class="blur" />
  </div>
</template>

<script>
import GraphicsCoinAtom from '~/components/graphics/GraphicsCoinAtom.vue'

export default {
  components: {
    GraphicsCoinAtom,
  },
}
</script>

<style lang="stylus" scoped>
// .canvas
//   position relative
//   width 30.7rem
//   height 30.7rem

.coin
  position absolute
  width 49.77%
  height auto
  &._6
    right 38.5%
    bottom 35.5%
  &._5
    right 32.4%
    bottom 29.4%
  &._4
    right 18.9%
    bottom 59.4%
  &._3
    right 16%
    bottom 53.2%
  &._2
    right 22%
    bottom 47.2%
  &._1
    right 16%
    bottom 41%

.blur
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background: radial-gradient(45.4% 46.06% at 49.98% 50.04%, #C01AEA 27.99%, rgba(179, 71, 206, 0.3) 68.92%, rgba(192, 26, 234, 0) 100%)
  opacity: 0.56
  filter: blur(73.4471px)
</style>
