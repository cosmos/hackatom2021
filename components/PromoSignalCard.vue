<template>
  <transition name="fade" appear="appear">
    <div
      class="banner"
      :class="[full && 'banner--full', smallSignal && 'banner--small']"
    >
      <div class="banner__content tm-title">
        <div class="header" @click.stop="playVideo">
          <h1 class="title tm-rf1 tm-bold tm-lh-title">
            HackAtom VI <span class="icon-record" />
          </h1>
          <p class="subtitle tm-rf0 tm-lh-copy tm-title mt-1">
            Opening Ceremony
          </p>
          <button v-if="full" class="banner__dismiss" @click.stop="close">
            <div class="banner__dismiss__icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.5C9.62663 0.5 7.30655 1.20379 5.33316 2.52236C3.35977 3.84094 1.8217 5.71509 0.913451 7.9078C0.00519943 10.1005 -0.232441 12.5133 0.230582 14.8411C0.693605 17.1689 1.83649 19.3071 3.51472 20.9853C5.19295 22.6635 7.33115 23.8064 9.65892 24.2694C11.9867 24.7324 14.3995 24.4948 16.5922 23.5866C18.7849 22.6783 20.6591 21.1402 21.9776 19.1668C23.2962 17.1935 24 14.8734 24 12.5C23.9908 9.32024 22.7235 6.27336 20.4751 4.02492C18.2266 1.77648 15.1798 0.509234 12 0.5V0.5ZM16.95 16.036L15.536 17.45L12 13.914L8.46401 17.45L7.05001 16.036L10.586 12.5L7.05001 8.964L8.46401 7.55L12 11.086L15.536 7.55L16.95 8.964L13.414 12.5L16.95 16.036Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>

        <div class="video mt-5">
          <youtube
            ref="youtube"
            width="100%"
            height="100%"
            :video-id="videoId"
            :player-vars="playerVars"
            @playing="playing"
          />
        </div>
        <!-- <p v-if="full" class="mt-5 tags tm-title tm-lh-copy tm-rf0">
          <tm-link href="https://twitter.com/hashtag/CosmosSignal">
            #CosmosSignal
          </tm-link>
        </p> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      full: false,
      smallSignal: false,
      videoId: '6bq-JaViGRM',
      playerVars: {
        rel: 0,
        enablejsapi: 1,
      },
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggle() {
      this.full = !this.full
    },
    open() {
      this.full = true
      this.smallSignal = false
    },
    close() {
      this.full = false
      this.player.pauseVideo()
      this.handleScroll()
    },
    playVideo() {
      this.player.playVideo()
      this.open()
    },
    playing() {
      this.open()
    },
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.smallSignal =
        !this.full && currentScrollPosition > window.innerHeight * 0.4
    },
  },
}
</script>

<style lang="stylus" scoped>
// Transition
.fade-leave-active
  transition opacity 0.3s cubic-bezier(0.32, 0, 0.67, 0), margin 0.3s cubic-bezier(0.32, 0, 0.67, 0)

.fade-leave-to
  opacity 0

.banner
  display flex
  align-items center
  justify-content center
  z-index $z-index-banner
  bottom 0
  right 0
  width 100%
  background var(--trans-gray-800)
  transition transform 0.15s ease-out, background-color 0.15s ease-out
  @media $breakpoint-large
    position fixed
    width auto
    right var(--spacing-7)
    bottom var(--spacing-7)
    background transparent
  &--small
    @media $breakpoint-large
      transform: scale(.8)
      .header
        cursor pointer
        &:before
          background var(--trans-gray-800)
      .video
      .subtitle
        display none
  &--full
    @media $breakpoint-large
      background var(--trans-gray-800)
      left 0
      right 0
      bottom 0
      top 0
      .banner__content
        padding var(--spacing-4) var(--wrap-gap)
      .banner__content
      .video
        width 100%
        max-width 61.375rem

.banner__content
  position relative
  width 100%
  padding 0 var(--wrap-gap)
  @media $breakpoint-small
    max-width 40rem
    margin: auto
    padding var(--spacing-4) var(--wrap-gap)
  @media $breakpoint-medium
    padding 0 var(--wrap-gap)
  @media $breakpoint-large
    max-width none
    padding 0

.header
  position relative
  &:before
    content ''
    position absolute
    z-index -1
    left -1rem
    right -1rem
    top -1rem
    bottom -1rem
    border-radius 1rem

.tags
  padding 0 var(--wrap-gap)
  @media $breakpoint-small
    padding 0

.banner__dismiss
  position absolute
  top 50%
  right var(--wrap-gap)
  display flex
  align-items center
  transform translateY(-50%)
  @media $breakpoint-small
    right 0

  &__icon
    border-radius 50%
    opacity 0.4
    transition opacity 0.15s ease-out

    svg
      display block

  &:hover &__icon,
  &:focus &__icon
    opacity 0.7

.video
  position relative
  cursor pointer
  display block
  overflow hidden
  width 100%
  height 0
  padding-bottom 56.25%
  border-radius $border-radius-4
  background-color var(--gray-100)
  background: linear-gradient(285.41deg, #171717 0%, #454545 100%)
  box-shadow var(--elevation-4)
  color var(--link)
  outline 0
  font-size 0
  @media $breakpoint-medium
    border-radius: 16px
  @media $breakpoint-large
    width 20rem
    border-radius: 16px

.video-iframe
  width 100%

.icon-video
  position absolute
  top 50%
  left 50%
  transform: translate(-50%, -50%)
  transition: transform .2s ease-out

.icon-record
  position relative
  display inline-block
  width .5rem
  height .5rem
  margin-left .5rem
  background: #CC0025
  border-radius 100%
  vertical-align middle
  &:before
    content ''
    position absolute
    top 50%
    left 50%
    width 1rem
    height 1rem
    border-radius 100%
    background-color rgba(204, 0, 37, 0.6)
    transform: translate(-50%, -50%)
    animation pulse 2.5s infinite

@media $breakpoint-xsmall-only
  .tags
  .banner__dismiss
    display none

@keyframes pulse
  0%, 100%
    opacity 1
    transform translate(-50%, -50%) scale(0.65)
  50%
    opacity .7
    transform translate(-50%, -50%) scale(1.05)
</style>

<style lang="stylus">
.video
  iframe
    position absolute
    top 0
    left 0
    right 0
    bottom 0

.ytp-expand-pause-overlay
  .ytp-pause-overlay
    display none
</style>
