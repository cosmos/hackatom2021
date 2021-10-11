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
            The biggest HackAtom in&nbsp;Cosmos history!
          </h2>
        </div>
      </div>

      <div class="info">
        <p class="tm-lh-copy tm-rf0 tm-rf1-m-up">
          Calling all developers… It's time to build a cross-chain universe!
          Take part in the biggest HackAtom in Cosmos history and compete for
          your share of $1,000,000 in prizes paid in $ATOM. Organized by
          Tendermint, HackAtom VI will be a one month hybrid hackathon covering
          six different themes:<br />
          - <b>Ethereum on Cosmos</b><br />
          - <b>Starport</b><br />
          - <b>Interoperability</b><br />
          - <b>DeFi</b><br />
          - <b>End-User Apps</b><br />
          - <b>Gaming</b>
        </p>
      </div>

      <div class="mt-10 tm-grid-base">
        <div class="video__container">
          <div class="video">
            <icon-video-play
              v-if="paused"
              class="video__icon"
              @click.native="play"
            />
            <video
              controls
              :class="paused && 'hide'"
              @canplay="updatePaused"
              @playing="updatePaused"
              @pause="updatePaused"
            >
              <source src="~/assets/video/hackatom.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconVideoPlay from '~/components/icons/IconVideoPlay.vue'

export default {
  components: {
    IconVideoPlay,
  },
  data() {
    return {
      videoElement: null,
      paused: true,
    }
  },
  computed: {
    playing() {
      return !this.paused
    },
  },
  methods: {
    updatePaused(event) {
      this.videoElement = event.target
      this.paused = event.target.paused
    },
    play() {
      this.videoElement.play()
    },
    pause() {
      this.videoElement.pause()
    },
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
  padding-bottom 57%
  font-size 0
  background-image url('~assets/video/hackatom-poster.jpg')
  background-size cover
  @media $breakpoint-medium
    width 100%
    margin 0
    border-radius 1rem
    overflow hidden
  video
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    width 100%
    height 100%
    &.hide
      opacity 0
  &__container
    grid-column 1 / -1
    @media $breakpoint-xl
      grid-column 2 / span 10
  &__icon
    cursor pointer
    position absolute
    z-index 1
    top 50%
    left 50%
    width 3.75rem
    height 3.75rem
    transform translate(-50%, -50%)
    transition transform .2s $ease-out
    &:hover
      transform translate(-50%, -50%) scale(1.1)
</style>
