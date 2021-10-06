<template>
  <section class="tm-section pb0 section">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <div class="header tm-center">
          <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
            The competition
          </div>
          <h2
            class="
              mt-3
              tm-title tm-rf5 tm-rf6-m-up tm-rf5-l-up tm-lh-title tm-bold
            "
          >
            The biggest HackAtom in&nbsp;Cosmos history is here!
          </h2>
        </div>
      </div>

      <div class="info">
        <p class="tm-lh-copy tm-rf0 tm-rf1-m-up">
          Calling all developers… It's time to build a cross-chain universe!
          Take part in the biggest HackAtom in Cosmos history and compete for
          your share of $1,000,000 in prizes. Organized by Tendermint, HackAtom
          VI will take place online for one month and cover six different
          themes: Interoperability, Gaming, DeFi, Starport, Wallets, and
          Ethereum on Cosmos.
        </p>
      </div>

      <div class="mt-10 tm-grid-base">
        <div class="video__container">
          <div class="video">
            <icon-video-play class="video__icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconVideoPlay from './icons/IconVideoPlay.vue'

export default {
  components: {
    IconVideoPlay,
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    margin-top var(--spacing-8)
  @media $breakpoint-large
    margin-top var(--spacing-10)

.header
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column 2 / span 6
    text-align center
  @media $breakpoint-xl
    grid-column 3 / span 8

.info
  margin-top var(--spacing-8)
  @media $breakpoint-medium
    margin-top var(--spacing-9)
  @media $breakpoint-large
    max-width $measure-3
    center()
    margin-top var(--spacing-8)

.video
  position relative
  height 0
  margin-left calc(-1 * var(--wrap-gap))
  margin-right calc(-1 * var(--wrap-gap))
  padding-bottom 56.3%
  background-color var(--light-gray)
  @media $breakpoint-medium
    width 100%
    margin 0
    border-radius 1rem
  &__container
    grid-column 1 / -1
    @media $breakpoint-xl
      grid-column 2 / span 10
  &__icon
    cursor pointer
    position absolute
    top 50%
    left 50%
    width 3.75rem
    height 3.75rem
    transform translate(-50%, -50%)
    transition transform .2s $ease-out
    &:hover
      transform translate(-50%, -50%) scale(1.1)
</style>
