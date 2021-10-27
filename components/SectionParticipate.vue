<template>
  <section class="tm-section pt11">
    <div class="tm-section-container tm-container container">
      <div class="star" />
      <div class="header tm-center tm-text-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
          Participate
        </div>
        <h2 class="mt-3 tm-title tm-rf6 tm-rf5-l-up tm-lh-title tm-bold">
          Suit up, Cosmonaut
        </h2>
      </div>
      <div class="tm-measure tm-center mt-8 tm-text-center">
        <div class="info tm-lh-copy tm-normal">
          <p>
            The time has come to show us your skills and help build a
            cross-chain universe. Are you ready?
          </p>
        </div>
      </div>

      <div class="mt-8 tm-text-center">
        <tm-button class="btn" size="l">
          Register <span class="icon__right">↗️</span>
        </tm-button>
        <tm-button
          class="btn"
          size="l"
          variant="text"
          background-color="transparent"
          color="var(--white)"
        >
          FAQ <span class="icon__right">↗️</span>
        </tm-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus" scoped>
.container
  position relative

.star
  position absolute
  z-index: -1
  width 111rem
  height 111rem
  top: 65%
  left: 50%
  background: radial-gradient(42.6% 37.31% at 48.94% 55.57%, #13FFFF 0%, rgba(25, 110, 238, 0.849029) 18.23%, rgba(47, 60, 177, 0.32) 53.96%, rgba(0, 0, 0, 0) 100%)
  transform: translate(-75%, -60%)
  @media $breakpoint-medium
    transform: translate(-100%, -50%)

.btn
  & + &
    margin-top var(--spacing-8)
    @media $breakpoint-medium
      margin-top 0
      margin-left var(--spacing-8)
</style>
