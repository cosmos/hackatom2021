<template>
  <div class="canvas">
    <img src="~/assets/images/bg/galaxy-bg.png" class="bg" />
    <kinesis-element :strength="-5" class="galaxy__container">
      <graphics-galaxy class="galaxy" />
    </kinesis-element>
    <kinesis-element v-if="!isSmall" :strength="-10" class="planet _comet">
      <img src="~/assets/images/tx.png" />
    </kinesis-element>
    <kinesis-element v-if="!isSmall" :strength="-30" class="planet _pink">
      <img src="~/assets/images/planet-01.png" />
    </kinesis-element>
    <kinesis-element v-if="!isSmall" :strength="-40" class="planet _gray">
      <img src="~/assets/images/planet-03.png" />
    </kinesis-element>
    <kinesis-element v-if="!isSmall" :strength="-50" class="planet _blue">
      <img src="~/assets/images/planet-02.png" />
    </kinesis-element>
  </div>
</template>

<script>
import GraphicsGalaxy from '~/components/graphics/GraphicsGalaxy.vue'

export default {
  components: {
    GraphicsGalaxy,
  },
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus" scoped>
.canvas
  // position relative
  width: 169vw
  height: 180vw
  @media $breakpoint-medium
    width: 169vw
    height: 180vw
  @media $breakpoint-large
    width: 146.4vw
    height: 162.1vw

  img
    max-width none
    height auto

.bg
  width 100%

.galaxy
  width 100%
  transform translateX(-50%)
  &__container
    position absolute
    left 50%
    top 7.665%
    width 77.2%

.planet
  // display none
  position absolute
  img
    width 100%
    height auto
  &._comet
    top 35.6%
    right 63.2%
    width 16.2%
    @media $breakpoint-medium
      top 38%
    @media $breakpoint-large
      top 34.25%
  &._pink
    top 35.1%
    right 73.2%
    width 9.4%
    @media $breakpoint-medium
      right 71%
      top 39.5%
    @media $breakpoint-large
      top 35%
  &._gray
    top 51.7%
    left 69.3%
    width 14.5141%
    @media $breakpoint-large
      top 49.45%
      left 68.5%
  &._blue
    top 82.9%
    right 58.9%
    width 28.45%
    @media $breakpoint-large
      top 65.85%
</style>
