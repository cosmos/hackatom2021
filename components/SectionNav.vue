<template>
  <div v-on-clickaway="closeNav" class="nav-container tm-wrapper headroom">
    <div class="tm-container tm-section-container">
      <nav class="nav tm-text-center" role="navigation">
        <span class="logo">
          <logo-cosmos class="logo__svg" />
          <span class="sr-only">Cosmos</span>
        </span>
        <span class="info tm-text tm-normal">
          <span>Virtual Hackathon</span>
          <tm-tooltip
            text="Some restrictions may apply.<br/>Click to learn more."
            position="top-center"
            :is-icon="true"
          >
            <icon-info />
          </tm-tooltip>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import Headroom from 'headroom.js'
import LogoCosmos from '~/components/logos/LogoCosmos.vue'
import IconInfo from '~/components/icons/IconInfo.vue'

export default {
  components: {
    LogoCosmos,
    IconInfo,
  },
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
      currentUrl: this.$route.fullPath,
      headroom: null,
    }
  },
  computed: {
    homePage() {
      return this.$route.path === '/'
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile)
    this.enableHeadroom()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
    this.disableHeadroom()
  },
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    closeNav() {
      this.isOpen = false
    },
    checkMobile() {
      window.innerWidth >= 768 && this.closeNav()
    },
    disableHeadroom() {
      if (this.headroom) {
        this.headroom.destroy()
        this.headroom = null
      }
    },
    enableHeadroom() {
      if (!this.headroom) {
        const options = {
          offset: 100,
          onUnpin: () => this.closeNav(),
        }
        this.headroom = new Headroom(this.$el, options)
        this.headroom.init()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav
  position relative
  z-index 2
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  .nav-list-bottom
    @media $breakpoint-medium
      display none
  .info
    display block
    > *
      vertical-align middle
    &.tablet
      display none
      @media $breakpoint-medium
        display block
    &.mobile
      @media $breakpoint-medium
        display none

.logo
  position relative
  z-index 1
  font-size 0
  &__svg
    width 5.5rem
    @media $breakpoint-medium
      width 6rem

.headroom
  will-change transform
  transition transform .2s linear

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

.nav-container
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-7)
  &.headroom--not-top
    // padding-top var(--spacing-4)
    // padding-bottom var(--spacing-4)
    background rgba(0, 0, 0, 1)
    @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em)))
      background rgba(0, 0, 0, 0.7)
      backdrop-filter blur(20px)
  &.headroom--top
    padding-top var(--spacing-7)
    padding-bottom var(--spacing-7)

.nav
  ul
    display flex
    align-items center
    justify-content center
  ul
    padding 0
  li
    list-style-type none
    display inline-block
    + li
      margin-left var(--spacing-7)

@media $breakpoint-medium-max
  .nav-list
    opacity .2
    position absolute
    top calc(-1 * var(--spacing-7))
    left calc(-1 * var(--wrap-gap))
    right calc(-1 * var(--wrap-gap))
    text-align center
    scrollbar-width none
    transform translateY(-20px) scaleY(0) scaleX(1)
    transform-origin 0 0
    transition transform .25s $ease-out, opacity .2s $ease-out
    background-color #171717
    .headroom--top &
      top calc(-1 * var(--spacing-7))
    &::-webkit-scrollbar
      display none
    &.opened
      opacity 1
      transform translateY(0) scaleY(1) scaleX(1)
    ul
      padding 4.7rem var(--spacing-7) 0
      display flex
      justify-content center
      align-items flex-start
      flex-direction column
      background var(--primary-gradient-complex)
      clip-path polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)
      text-align left
      li
        width 100%
        padding var(--spacing-4) 0
      li + li
        margin 0
      .tm-link
        position relative
        display block
        width 100%

  .nav-list-bottom
    padding 0 var(--spacing-7) var(--spacing-9)
    text-align left
</style>
