<template>
  <div id="content">
    <cookie-banner />
    <div class="page-container">
      <section-nav v-if="this.$route.path !== '/mentors'" />
      <nuxt />
    </div>
    <tm-footer />
  </div>
</template>

<script>
import CookieBanner from '~/components/CookieBanner.vue'
import SectionNav from '~/components/SectionNav.vue'
import TmFooter from '~/components/TmFooter.vue'

export default {
  components: {
    CookieBanner,
    SectionNav,
    TmFooter,
  },
}
</script>

<style lang="stylus">
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out

.page-enter,
.page-leave-to
  opacity 0

#content
  overflow hidden

.page-container
  position relative
  z-index 2
  overflow hidden
</style>
