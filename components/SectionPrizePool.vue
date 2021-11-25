<template>
  <section id="prizes" class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <div class="col-left">
          <p class="tm-lh-title tm-rf0 tm-medium tm-overline tm-muted">
            Challenges and Prizes
          </p>
          <h2 class="mt-3 tm-title tm-lh-title tm-rf5 tm-bold">
            Keep your eye<br />
            on the prize
          </h2>
        </div>
        <div class="col-right card">
          <graphics-coins class="graphics" />
          <div class="mb-4">
            <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
              Prize pool
            </div>
            <div
              class="tm-title tm-title tm-lh-title tm-rf7 tm-rf6-m-up tm-bold"
            >
              $1M
            </div>
            <div class="tm-title tm-title tm-lh-title tm-rf1 tm-normal">
              in ATOM*
            </div>
          </div>
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
  @media $breakpoint-xl
    grid-column span 4
    height 100%
    display flex
    flex-direction column
    justify-content center
  @media $breakpoint-xl
    grid-column span 5

.col-right
  grid-column 1 / -1
  margin-top var(--spacing-11)
  margin-bottom var(--spacing-8)
  padding-bottom var(--spacing-12)
  @media $breakpoint-medium
    margin-top var(--spacing-8)
  @media $breakpoint-xl
    grid-column span 4
    margin 0
    padding-bottom 0
  @media $breakpoint-xl
    grid-column 7 / span 6
    margin-top 0

.card
  position relative
  width 100%
  @media $breakpoint-xl
    display flex
    align-items center
  .tm-overline
    color var(--light-gray)

.graphics
  position absolute
  right -5.4375rem
  bottom -9.3375rem
  width 22.255rem
  height 22.255rem
  @media $breakpoint-medium
    right -7.25rem
    top -3.11rem
    bottom auto
    width 30.7rem
    height 30.7rem
  @media $breakpoint-xl
    position relative
    right auto
    top auto
    width 19rem
    height: 20.2rem
    flex-shrink: 0
</style>
