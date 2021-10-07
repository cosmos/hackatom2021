<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <div class="col-left">
          <p class="tm-lh-copy tm-rf0 tm-rf1-m-up tm-normal">
            A massive $1,000,000 worth of ATOM will be up for grabs divided over
            the six competition categories with an additional Community Choice
            award for the project that receives the most hearts on Devpost.
          </p>
        </div>
        <div class="col-right card">
          <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
            Prize pool
          </div>
          <div class="tm-title tm-title tm-lh-title tm-rf7 tm-rf6-m-up tm-bold">
            $1M
          </div>
          <div class="tm-title tm-title tm-lh-title tm-rf1 tm-normal">
            in ATOM*
          </div>
          <graphics-coins class="graphics" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GraphicsCoins from '~/components/graphics/GraphicsCoins.vue'

export default {
  components: {
    GraphicsCoins,
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    padding-top var(--spacing-11)

.col-left
  grid-column 1 / -1
  @media $breakpoint-large
    grid-column span 4
    height 100%
    display flex
    align-items center
  @media $breakpoint-xl
    grid-column 2 / span 5
    height 100%
    display flex
    align-items center

.col-right
  grid-column 1 / -1
  margin-top var(--spacing-8)
  @media $breakpoint-medium
    margin-top var(--spacing-8)
  @media $breakpoint-large
    grid-column span 4
    margin-top 0
  @media $breakpoint-xl
    grid-column 7 / span 5
    margin-top 0

.card
  position relative
  padding var(--spacing-8) var(--spacing-8) 8.4rem
  border-radius: 1.25rem
  background-color #171717
  box-shadow 0px 24px 96px rgba(0, 3, 66, 0.05)
  @media $breakpoint-medium
    padding var(--spacing-10) var(--spacing-9)
  @media $breakpoint-large
    padding 3.625rem var(--spacing-8)
  .tm-overline
    color var(--light-gray)

.graphics
  position absolute
  right -5.4375rem
  bottom -7.3375rem
  width 22.255rem
  height 22.255rem
  @media $breakpoint-medium
    right -7.25rem
    top -3.11rem
    bottom auto
    width 30.7rem
    height 30.7rem
  @media $breakpoint-large
    right -9.5625rem
    top -2.8219rem
</style>
