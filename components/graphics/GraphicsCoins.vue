<template>
  <div class="canvas">
    <graphics-coin-atom class="coin _1" />
    <graphics-coin-atom class="coin _2" />
    <graphics-coin-atom class="coin _3" />
    <graphics-coin-atom class="coin _4" />
    <graphics-coin-atom class="coin _5" />
    <graphics-coin-atom class="coin _6" />
    <graphics-coin-atom class="coin _7" />
    <graphics-coin-atom class="coin _8" />
    <graphics-coin-atom class="coin _9" />
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
  @media $breakpoint-large
    width 64%
  &._7
  &._8
  &._9
    display none
    @media $breakpoint-large
      display block
  &._9
    @media $breakpoint-large
      right 0.2%
      bottom 15.2%
  &._8
    @media $breakpoint-large
      right -7.1%
      bottom 8.1%
  &._7
    @media $breakpoint-large
      right 34.2%
      bottom 33.2%
  &._6
    right 38.5%
    bottom 35.5%
    @media $breakpoint-large
      right 41.6%
      bottom 26.1%
  &._5
    right 32.4%
    bottom 29.4%
    @media $breakpoint-large
      right 34%
      bottom 18.8%
  &._4
    right 18.9%
    bottom 59.4%
    @media $breakpoint-large
      right 10.8%
      bottom 56%
  &._3
    right 16%
    bottom 53.2%
    @media $breakpoint-large
      right 7.2%
      bottom 48.7%
  &._2
    right 22%
    bottom 47.2%
    @media $breakpoint-large
      right 15.2%
      bottom 41%
  &._1
    right 16%
    bottom 41%
    @media $breakpoint-large
      right 7.2%
      bottom 34%

.blur
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background: radial-gradient(45.4% 46.06% at 49.98% 50.04%, #C01AEA 27.99%, rgba(179, 71, 206, 0.3) 68.92%, rgba(192, 26, 234, 0) 100%)
  opacity: 0.56
  filter: blur(57.847px)
  @media $breakpoint-large
    transform: translateX(20%)
</style>
